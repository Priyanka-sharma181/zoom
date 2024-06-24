import React, { useEffect } from 'react';
import ZoomUs from 'react-native-zoom-us';

const ZoomMeetingComponent = () => {
  useEffect(() => {
    // Listener for meeting status changes
    const listener = ZoomUs.onMeetingStatusChange(({ event }) => {
      console.log('onMeetingStatusChange', event);
    });

    // Listener for when a meeting is joined
    const joinListener = ZoomUs.onMeetingJoined(() => {
      console.log('onMeetingJoined');
    });

    // Cleanup listeners when the component is unmounted
    return () => {
      listener.remove();
      joinListener.remove();
    };
  }, []);

  return (
    <div>
      <h1>Zoom Meeting Component</h1>
      <p>This component listens to Zoom meeting status changes.</p>
    </div>
  );
};

export default ZoomMeetingComponent;
