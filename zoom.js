import ZoomUs from 'react-native-zoom-us';

// initialize
await ZoomUs.initialize({
  jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBLZXkiOiJpMTFLVFNOSVFBeXMwRVU5bm1mbUEiLCJpYXQiOjE2OTgyMjIyNDAsImV4cCI6MTY5ODIyNTg0MCwidG9rZW5FeHAiOjE2OTgzMDg2NDB9.i_nd02qpQG_7UCKpdCvG7YSw8_5fmZ3VDSWSl7xyqpI',
});


// initialize with extra config
await ZoomUs.initialize(
  {
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBLZXkiOiJpMTFLVFNOSVFBeXMwRVU5bm1mbUEiLCJpYXQiOjE2OTgyMjIyNDAsImV4cCI6MTY5ODIyNTg0MCwidG9rZW5FeHAiOjE2OTgzMDg2NDB9.i_nd02qpQG_7UCKpdCvG7YSw8_5fmZ3VDSWSl7xyqpI',
    domain: 'zoom.us',
  },
  {
    disableShowVideoPreviewWhenJoinMeeting: true,
    enableCustomizedMeetingUI: true,
  },
);

// Start Meeting
await ZoomUs.startMeeting({
  userName: 'Johny',
  meetingNumber: '89899379609',
  zoomAccessToken: "xSIS4nvQ42WRhUWFQbwLmVhoTQNM20",
  userType: 2, // optional
});

// Join Meeting
await ZoomUs.joinMeeting({
  userName: 'Johny',
  meetingNumber: '12345678',
});

// Join Meeting with extra params
await ZoomUs.joinMeeting({
  userName: 'Johny',
  meetingNumber: '12345678',
  password: '1234',
  noAudio: true,
  noVideo: true,
});

// Leave Meeting
await ZoomUs.leaveMeeting();

// Connect Audio
await ZoomUs.connectAudio();
// you can also use autoConnectAudio: true in `ZoomUs.joinMeeting`