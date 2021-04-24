import React, { useEffect } from 'react';
import { getProfile } from '../../../api/auth';

const ProfileEdit = () => {

  const getProfileHandler = async () => {
    const { data } = await getProfile();

    console.log(data);
  }

  useEffect(() => {
    getProfileHandler();
  }, []);

  return (
    <div>Profile edit</div>
  )
}

export default ProfileEdit;