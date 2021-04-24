import React, { useState, useMemo } from 'react';
import {
  Show,
  TextField,
  RichTextField,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  EditButton,
  showNotification,
} from 'react-admin';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MaterialTextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'
import { COURSE_SOURCES, LECTURES_SOURCES } from '../../../constants/sources';
import { LECTURE_ENTITY, STUDENT_ENTITY } from '../../../constants/entities';
import { ROLES } from '../../../constants/enums';
import { getStudents } from '../../../api/students';
import { inviteStudentToCourse } from '../../../api/courses';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    marginTop: 16,
  },
}));

const CoursesShow = ({ permissions, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('');
  const isTeacher = useMemo(() => permissions === ROLES.TEACHER, [permissions]);

  const handleOpen = () => {
    setOpen(true);
    getStudents().then(({ data }) => setStudents(data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inviteStudentHandler = async () => {
    const { match: { params: { id } }, showNotification } = props;
    
    await inviteStudentToCourse(id, student);

    setOpen(false);

    showNotification('Student Invited');
  }

  const body = (
    <div className={classes.paper}>
      <Autocomplete
        onChange={(_, value) => setStudent(value.user.email)}
        freeSolo
        options={students}
        getOptionLabel={(option) => option.user.email}
        style={{ width: 300 }}
        renderInput={(params) => (
          <MaterialTextField
            {...params}
            label="Student Email"
            variant="outlined"
            onChange={e => setStudent(e.target.value)}
          />
        )}
      />
      <Button
        className={classes.btn}
        onClick={inviteStudentHandler}
        variant="outlined"
      >
        Invite Student
      </Button>
    </div>
  );

  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="info">
          <TextField source={COURSE_SOURCES.name} />
          <RichTextField source={COURSE_SOURCES.description} />
        </Tab>
        <Tab label="lectures">
          <ArrayField source={LECTURE_ENTITY}>
            <Datagrid>
              <TextField source={LECTURES_SOURCES.name} />
              <RichTextField source={LECTURES_SOURCES.description} />
              {isTeacher && <EditButton basePath="/lectures" />}
            </Datagrid>
          </ArrayField>
        </Tab>
        {isTeacher && (
          <Tab label="students">
            <Button onClick={handleOpen} variant="outlined">Invite Student</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
            <ArrayField source={STUDENT_ENTITY}>
              <Datagrid>
                <TextField source="user.firstname" label="Firstname" />
                <TextField source="user.lastname" label="Lastname" />
                <TextField source="user.email" label="Email" />
              </Datagrid>
            </ArrayField>
          </Tab>
        )}
      </TabbedShowLayout>
    </Show>
  )
}

export default withRouter(connect(null, { showNotification })(CoursesShow));