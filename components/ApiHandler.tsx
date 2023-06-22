//FOR FUTURE PURPOSES TO BE USED AS REUSABLE COMPONENT TO handle api calls

import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { ApiHandlerProps } from '@/types';

const ApiHandler = ({ path, onSuccess }: ApiHandlerProps) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(path);
        const data = await response.json();
        onSuccess(data);
      } catch (error) {
        console.error('Error fetching swornMember data:', error);
        toast.error('Data source call failed. Please contact admin');
      }
    };

    fetchData();
  }, [path, onSuccess]);

  return null;
};

export default ApiHandler;
