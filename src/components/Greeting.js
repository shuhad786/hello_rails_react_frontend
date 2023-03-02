import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMessages } from '../redux/messages/messages';

export default function Greeting() {
  const data = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveMessages());
  }, [dispatch]);
  return (
    <div>
      <h2>{data.text}</h2>
    </div>
  );
}
