<script setup lang="ts">
import {ref, onMounted, Ref} from 'vue';
// import videojs from "video.js";
// import on = videojs.on;

const videoA = ref<HTMLVideoElement | null>(null);
const videoSourceA : Ref<string>= ref('');
const videoB = ref<HTMLVideoElement | null>(null);
const videoSourceB : Ref<string> = ref('');

const videoList = [
  'v2.mp4', 'v2.mp4'
]
const nextVideoUrl = (i: number | undefined) => {
  const host = "http://localhost:3001/videos"
  if (i === undefined) i = 0
  else i++;
  if (i >= videoList.length) i = 0;
  return {id: i, url: `${host}/${videoList[i]}`};
}

let curVideo = ref(0);
let videoId:number|undefined = undefined;
const playNext = () => {
  // console.error('playnext', curVideo)
  let ret = nextVideoUrl(videoId);
  videoId = ret.id
  if (curVideo.value === 0) {
    videoSourceA.value = ret.url;
    curVideo.value = 1;
    videoB.value?.play();
  } else {
    videoSourceB.value = ret.url;
    curVideo.value = 0;
    videoA.value?.play();
  }
  // console.error('next', curVideo)
}
const startToPlay = () =>{
  videoA.value?.play();
}
const init = () =>{
  let ret = nextVideoUrl(undefined);
  videoSourceA.value = ret.url
  ret = nextVideoUrl(0);
  videoSourceB.value = ret.url
  videoId = ret.id;

}
onMounted( ()=>{
  //init
  init();
});
</script>

<template>
  <div>{{curVideo}}</div>
  <div>
    <div v-show ="curVideo === 0">
      <video   ref="videoA" width="320" height="240"  autoplay muted :src="videoSourceA"  @ended="playNext"/>
    </div>
    <div v-show ="curVideo === 1">
      <video   ref="videoB" width="320" height="240"  muted :src="videoSourceB"  @ended="playNext"/>
    </div>

    <button @click="startToPlay">Play</button>

  </div>
<!--  <video width="320" height="240" ref="videoRef"  autoPlay playsinline :src="videoSrc" @ended="playNext"/>-->


</template>

<style scoped>

</style>