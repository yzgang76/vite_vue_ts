<!-- src/components/AIVirtualMan.vue -->
<template>
  <section>
    <h1>AI Virtual Man</h1>
    <video ref="virtualManVideo" autoplay playsinline></video>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { io } from 'socket.io-client';

export default {
  setup() {
    const virtualManVideo = ref(null);

    onMounted(async () => {
      const virtualManStream = await getVirtualManStream('/video');
      await startConnection(virtualManVideo, virtualManStream);
    });

    async function getVirtualManStream(videoUrl) {
      const virtualManVideo = document.createElement('video');
      virtualManVideo.src = videoUrl;
      virtualManVideo.playsInline = true;
      virtualManVideo.controls = false;
      virtualManVideo.autoplay = true;
      virtualManVideo.muted = true;
      virtualManVideo.style.display = 'none';
      document.body.appendChild(virtualManVideo);

      await new Promise((resolve) => {
        virtualManVideo.onplaying = () => resolve();
        setTimeout(resolve, 5000); // 5 second timeout as a fallback
      });

      const virtualManStream = virtualManVideo.captureStream();
      return virtualManStream;
    }

    async function startConnection(virtualManVideo, virtualManStream) {
      const peerConnection = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });

      peerConnection.ontrack = (event) => {
        virtualManVideo.value.srcObject = event.streams[0];
      };

      // const socket = io('/');
      // socket.on('connected', async () => {
      //   ... Implement signaling mechanism for exchanging session information.
      // });

      virtualManStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, virtualManStream);
      });

      peerConnection.onicecandidate = (event) => {
        // ... Handle ICE candidate event.
      };
    }

    return {
      virtualManVideo,
    };
  },
};
</script>