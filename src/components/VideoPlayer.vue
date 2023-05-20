<template>
  <div>
    <!--    poster="http://localhost:3001/image" -->

    <video width="320" height="240" ref="videoRef"  autoPlay playsinline :src="videoSrc" @ended="playNext"/>
    <!--    <video autoplay>-->
    <!--      <source :src="videoSrc" type="video/mp4">-->
    <!--      <source  src="http://localhost:3001/video" type="video/mp4">-->
    <!--    </video>-->

    <button ref="playButton">Play</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, Ref, onUnmounted} from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);
const videoSrc: Ref<string> = ref('');
const playButton = ref<HTMLVideoElement | null>(null);

interface VideoResponse {
  url: string;
}

const videoList = [
  'v3.mp4', 'v2.mp4'
]
const nextVideoUrl = (i: number | undefined) => {
  const host = "http://localhost:3001/videos"
  if (i === undefined) i = 0
  else i++;
  if (i >= videoList.length) i = 0;
  return {id: i, url: `${host}/${videoList[i]}`};
}
// const getVideoUrl = async () => {
//   try {
    // const response = await fetch('http://localhost:3001/video');
    // if (response.ok) {
    //   const { url } = (await response.json()) as VideoResponse;
    //   console.error(`url ${url}`)
    // videoSrc.value = url;
    // videoSrc.value = nextVideoUrl().url;
    // console.error('11111111');
    // } else {
    //   throw new Error(`Error fetching video: ${response.status}`);
    // }
  // } catch (error) {
  //   console.error(error);
  // }
// };

const startToPlay = () => {
  playButton.value?.addEventListener('click', () => {
    videoRef.value?.play();
    playButton.value?.classList.add('hidden');
  });
};

const i = ref(0)
const playNext = () => {
  let ret = nextVideoUrl(i.value)
  i.value = ret.id;
  videoSrc.value = ret.url;
  console.error('next', ret)
}
onMounted( () => {
  videoSrc.value = nextVideoUrl(undefined).url;
  startToPlay()
});
onUnmounted(()=>{

})
</script>
<!--<template>-->
<!--  <div>-->
<!--    <video ref="videoPlayer" controls></video>-->
<!--  </div>-->
<!--</template>-->

<!--<script  lang="ts">-->
<!--import { defineComponent, onMounted, ref } from 'vue';-->
<!--import 'video.js/dist/video-js.css';-->
<!--import 'video.js/dist/video.js';-->

<!--export default defineComponent({-->
<!--  name: 'VideoPlayer',-->
<!--  setup() {-->
<!--    console.error('00000000');-->
<!--    const videoRef = ref(null); // 创建一个 videoRef 引用-->

<!--    const loadVideo = async () => { // 定义异步函数 loadVideo-->
<!--      console.error('loadVideo')-->
<!--      const url = 'http://localhost:3001/video'; // 替换为实际的视频文件 URL-->
<!--      const player = this.player// 在 setup 函数中使用 videoRef 引用-->

<!--      if (player) { // 如果已经存在 videoPlayer 元素，则直接返回-->
<!--        return;-->
<!--      }-->

<!--      const options = {-->
<!--        autoplay: true, // 自动播放-->
<!--        controls: true, // 显示控制条-->
<!--        sources: [{ src: url, type: 'video/mp4' }] // 设置视频源-->
<!--      };-->

<!--      const video = new Video(player, options); // 创建 VideoJS 实例-->
<!--      console.error('111111',video);-->
<!--      onMounted(() => { // 在组件挂载后执行以下操作-->
<!--        video.play(); // 直接播放视频-->
<!--      });-->
<!--    };-->

<!--    const playVideo = async () => { // 定义异步函数 playVideo-->
<!--      console.error('playVideo')-->
<!--      const player = await loadVideo(); // 先调用 loadVideo 函数获取视频文件并创建 VideoJS 实例，然后再执行 playVideo 函数播放视频-->
<!--    }-->
<!--    // playVideo()-->
<!--    return { videoRef, playVideo }; // 返回 videoRef 和 playVideo 函数作为组件的 props-->
<!--  },-->
<!--});-->
<!--</script>-->