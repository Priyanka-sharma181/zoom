// src/ZoomMeeting.tsx
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const ZoomMeeting = () => {
  const meetingSDKElementRef = useRef<WebView>(null);

  const authEndpoint = 'https://bc42-2409-4081-9c8f-e879-4acb-836f-21bb-a651.ngrok-free.app'; // Replace with your authentication endpoint
  const sdkKey = 'qiOAZV7zSrWIAbkAMiGjg'; // Replace with your SDK Key
  const meetingNumber = '83656816702';
  const passWord = '0FY3LU';
  const role = 0;
  const userName = 'priyanka';
  const userEmail = 'priyanka.sharma@madgicaltechdom.com';
  const registrantToken = '';
  const zakToken = '';

  useEffect(() => {
    if (meetingSDKElementRef.current) {
      meetingSDKElementRef.current.injectJavaScript(`
        document.getElementById('meetingSDKElement').style.width = '100%';
        document.getElementById('meetingSDKElement').style.height = '100%';
      `);
    }
  }, []);

  const getSignature = async () => {
    try {
      const response = await axios.post(authEndpoint, {
        meetingNumber: meetingNumber,
        role: role,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      const data = response.data;
      console.log(data)
      startMeeting(data.signature);
    } catch (error) {
      console.error("Error fetching signature:", error);
    }
  };

  const startMeeting = (signature: string) => {
    const zoomScript = `
      (function() {
        const client = ZoomMtgEmbedded.createClient();
        client.init({
          zoomAppRoot: document.getElementById('meetingSDKElement'),
          language: 'en-US',
          patchJsMedia: true,
        });
        client.join({
          signature: '${signature}',
          sdkKey: '${sdkKey}',
          meetingNumber: '${meetingNumber}',
          password: '${passWord}',
          userName: '${userName}',
          userEmail: '${userEmail}',
          tk: '${registrantToken}',
          zak: '${zakToken}',
        });
      })();
    `;
    console.log("okkk")
    if (meetingSDKElementRef.current) {
      meetingSDKElementRef.current.injectJavaScript(zoomScript);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Join Meeting" onPress={getSignature} />
      </View>
      <WebView
        ref={meetingSDKElementRef}
        source={{ html: '<div id="meetingSDKElement"></div>' }}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }],
    zIndex: 1,
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});

export default ZoomMeeting;
