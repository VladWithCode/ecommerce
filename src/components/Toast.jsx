import React from 'react';
import { useSelector } from 'react-redux';

function Toast() {
  const { toastMsg, toastErr } = useSelector(state => state.ui);

  return <div className={`toast ${toastErr && 'error'}`}>{toastMsg}</div>;
}

export default Toast;
