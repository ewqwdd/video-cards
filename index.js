const pauseBtnSvg=`<svg width="24" class="pauseBtn" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5.5V18.5C15 18.9647 15 19.197 15.0384 19.3902C15.1962 20.1836 15.816 20.8041 16.6094 20.9619C16.8026 21.0003 17.0349 21.0003 17.4996 21.0003C17.9642 21.0003 18.1974 21.0003 18.3906 20.9619C19.184 20.8041 19.8041 20.1836 19.9619 19.3902C20 19.1987 20 18.9687 20 18.5122V5.48777C20 5.03125 20 4.80087 19.9619 4.60938C19.8041 3.81599 19.1836 3.19624 18.3902 3.03843C18.197 3 17.9647 3 17.5 3C17.0353 3 16.8026 3 16.6094 3.03843C15.816 3.19624 15.1962 3.81599 15.0384 4.60938C15 4.80257 15 5.03534 15 5.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5.5V18.5C4 18.9647 4 19.197 4.03843 19.3902C4.19624 20.1836 4.81599 20.8041 5.60938 20.9619C5.80257 21.0003 6.0349 21.0003 6.49956 21.0003C6.96421 21.0003 7.19743 21.0003 7.39062 20.9619C8.18401 20.8041 8.8041 20.1836 8.96191 19.3902C9 19.1987 9 18.9687 9 18.5122V5.48777C9 5.03125 9 4.80087 8.96191 4.60938C8.8041 3.81599 8.18356 3.19624 7.39018 3.03843C7.19698 3 6.96465 3 6.5 3C6.03535 3 5.80257 3 5.60938 3.03843C4.81599 3.19624 4.19624 3.81599 4.03843 4.60938C4 4.80257 4 5.03534 4 5.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,playBtnSvg=`<svg width="24" class="playBtn" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,volumeMaxSvg=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.82 4.68646C19.8191 5.61815 20.6167 6.74466 21.1636 7.99651C21.7105 9.24836 21.9952 10.599 21.9999 11.9651C22.0047 13.3312 21.7295 14.6838 21.1914 15.9394C20.6532 17.1951 19.8635 18.3271 18.8709 19.2657M16.092 7.61188C16.6915 8.17089 17.17 8.8468 17.4982 9.5979C17.8263 10.349 17.9971 11.1594 18 11.9791C18.0028 12.7987 17.8377 13.6103 17.5148 14.3636C17.1919 15.117 16.7181 15.7963 16.1225 16.3594M7.4803 15.4069L9.15553 17.48C10.0288 18.5607 10.4655 19.101 10.848 19.1598C11.1792 19.2108 11.5138 19.0924 11.7394 18.8447C12 18.5585 12 17.8638 12 16.4743V7.52566C12 6.13621 12 5.44149 11.7394 5.1553C11.5138 4.90755 11.1792 4.78923 10.848 4.84015C10.4655 4.89897 10.0288 5.43933 9.15553 6.52003L7.4803 8.59313C7.30388 8.81145 7.21567 8.92061 7.10652 8.99916C7.00982 9.06875 6.90147 9.1205 6.78656 9.15197C6.65687 9.1875 6.51652 9.1875 6.23583 9.1875H4.8125C4.0563 9.1875 3.6782 9.1875 3.37264 9.28844C2.77131 9.48709 2.2996 9.95881 2.10094 10.5601C2 10.8657 2 11.2438 2 12C2 12.7562 2 13.1343 2.10094 13.4399C2.2996 14.0412 2.77131 14.5129 3.37264 14.7116C3.6782 14.8125 4.0563 14.8125 4.8125 14.8125H6.23583C6.51652 14.8125 6.65687 14.8125 6.78656 14.848C6.90147 14.8795 7.00982 14.9312 7.10652 15.0008C7.21567 15.0794 7.30388 15.1885 7.4803 15.4069Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,volumeOffSvg=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1716 9.17117L21.8284 14.828M16.1716 14.828L21.8284 9.17117M7.4803 15.4065L9.15553 17.4796C10.0288 18.5603 10.4655 19.1006 10.848 19.1594C11.1792 19.2104 11.5138 19.092 11.7394 18.8443C12 18.5581 12 17.8634 12 16.4739V7.52526C12 6.13581 12 5.44109 11.7394 5.1549C11.5138 4.90715 11.1792 4.78884 10.848 4.83975C10.4655 4.89858 10.0288 5.43893 9.15553 6.51963L7.4803 8.59273C7.30388 8.81105 7.21567 8.92021 7.10652 8.99876C7.00982 9.06835 6.90147 9.1201 6.78656 9.15158C6.65687 9.1871 6.51652 9.1871 6.23583 9.1871H4.8125C4.0563 9.1871 3.6782 9.1871 3.37264 9.28804C2.77131 9.4867 2.2996 9.95841 2.10094 10.5597C2 10.8653 2 11.2434 2 11.9996C2 12.7558 2 13.1339 2.10094 13.4395C2.2996 14.0408 2.77131 14.5125 3.37264 14.7112C3.6782 14.8121 4.0563 14.8121 4.8125 14.8121H6.23583C6.51652 14.8121 6.65687 14.8121 6.78656 14.8476C6.90147 14.8791 7.00982 14.9308 7.10652 15.0004C7.21567 15.079 7.30388 15.1881 7.4803 15.4065Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,disableFullScreen=e=>{e.addEventListener("webkitfullscreenchange",function(e){document.webkitExitFullscreen()}),e.addEventListener("mozfullscreenchange",function(e){document.mozCancelFullScreen()}),e.addEventListener("msfullscreenchange",function(e){document.msExitFullscreen()}),e.addEventListener("fullscreenchange",function(e){document.exitFullscreen()}),e.addEventListener("fullscreenchange",function(e){document.exitFullscreen()}),e.addEventListener("contextmenu",function(e){e.preventDefault(),e.stopPropagation()},!1)};class Question{videoWrapper=void 0;constructor(e,_,t,i,s){this.id=e,this.buttons=_,this.wrapper=t,this.video=i,this.className=s}destroy(){this.videoWrapper&&(this.videoWrapper.remove(),this.videoWrapper=void 0)}dissapear(){this.videoWrapper.classList.add("qzz__video_wrapper_disappear"),setTimeout(()=>{this.destroy()},400)}appear(e=!0){this.videoWrapper.style.display="flex",e?(setTimeout(()=>this.video.play(),500),this.videoWrapper.classList.add("qzz__video_wrapper_appear"),setTimeout(()=>{this.videoWrapper.classList.remove("qzz__video_wrapper_appear")},500)):setTimeout(()=>this.video.play(),800)}updateProgressBar(e){let _=e.duration;_>0&&(this.progressBar.style.width=e.currentTime/_*100+"%",this.updateTimeDisplay(e))}handleProgressBarClick(e,_){e.stopPropagation();let t=e.target.getBoundingClientRect(),i=e.offsetX,s=i/t.width,r=s*_.duration;_.currentTime=r}toggleMute(e){e.muted=!e.muted,this.muteButton.innerHTML=e.muted?volumeOffSvg:volumeMaxSvg}updateTimeDisplay(e){let _=this.formatTime(e.currentTime),t=this.formatTime(e.duration);this.timeDisplay.textContent=`${_} / ${t}`}formatTime(e){let _=Math.floor(e%60);return`${Math.floor(e/60)}:${_<10?"0":""}${_}`}videoTogle(e){e.paused?(this.wrapper.classList.remove("paused"),e.play()):(this.wrapper.classList.add("paused"),e.pause())}render(e){let _=document.createElement("div");_.classList.add("qzz__video_wrapper"),this.className&&_.classList.add(this.className);let t=document.createElement("video");t.classList="qzz__video",t.setAttribute("playsinline",""),t.setAttribute("webkit-playsinline",""),t.setAttribute("src",this.video),t.setAttribute("type","video/mp4"),t.addEventListener("timeupdate",()=>{this.updateProgressBar(t)}),disableFullScreen(t),_.appendChild(t),this.video=t,_.style.pointerEvents="none",t.addEventListener("canplay",()=>{_.style.pointerEvents="auto"});let i=document.createElement("div");i.classList.add("qzz__header");let s=document.createElement("div");s.classList.add("qzz__progress-bar-container"),this.progressBar=document.createElement("div"),this.progressBar.classList.add("qzz__progress-bar"),s.appendChild(this.progressBar),s.addEventListener("click",e=>{this.handleProgressBarClick(e,t)}),_.appendChild(s);let r=document.createElement("button");r.classList.add("qzz__pause_button"),r.innerHTML=playBtnSvg+pauseBtnSvg,_.addEventListener("click",()=>{this.videoTogle(t)}),_.appendChild(r),this.timeDisplay=document.createElement("div"),this.timeDisplay.classList.add("qzz__time_display"),this.timeDisplay.textContent="0:00 / 0:00",this.timeDisplay.onclick=e=>e.stopPropagation(),i.appendChild(this.timeDisplay),_.appendChild(i),this.muteButton=document.createElement("button"),this.muteButton.classList.add("qzz__mute_button"),this.muteButton.innerHTML=volumeMaxSvg,this.muteButton.addEventListener("click",e=>{e.stopPropagation(),this.toggleMute(t)}),i.appendChild(this.muteButton),this.buttons.forEach(t=>{let i=document.createElement("button");i.className="qzz__button",i.innerHTML=t.html,i.onclick=_=>{_.stopPropagation(),t.onclick?.(_),e(t)},_.appendChild(i)}),this.wrapper.appendChild(_),this.videoWrapper=_}}class Quiz{rendered=[];answers={};prev;current;started=!1;timeout;constructor(e,_,t={}){this.questions=e.map(e=>new Question(e.id,e.buttons,_,e.video,e.className)),this.options=t,this.wrapper=_,t.trigger&&(t.trigger.onclick=e=>{e.stopPropagation();let _=trigger.querySelector(".overlay");if(this.started){let i=this.wrapper.style.display;"none"===i?(this.wrapper.style.display="flex",this.current?.video?.play?.(),_?.classList?.add?.("playing"),this.wrapper?.classList?.remove?.("paused"),t.trigger.querySelector("video")?.pause?.(),this.positionVideo(),this.wrapper.classList.add("qzz__appear")):this.close()}else this.wrapper.style.display="flex",_?.classList?.add?.("playing"),this.wrapper?.classList?.remove?.("paused"),t.trigger.querySelector("video")?.pause?.(),this.positionVideo(),this.wrapper.classList.add("qzz__appear"),this.start()}),document.addEventListener("click",()=>{this.close()}),this.wrapper.addEventListener("click",e=>{e.stopPropagation()}),this.wrapper.addEventListener("mousemove",()=>{let e=this.wrapper.querySelector(".qzz__pause_button");this.timeout&&clearTimeout(this.timeout),this.started&&(e.style.opacity=1,this.timeout=setTimeout(()=>{e.style.opacity=0},1e3))})}close(){let e=trigger.querySelector(".overlay");this.wrapper.style.display="none",this.current?.video?.pause?.(),e?.classList?.remove?.("playing"),this.wrapper?.classList?.add?.("paused"),this.options.trigger.querySelector("video")?.play?.(),this.wrapper.classList.remove("qzz__appear")}positionVideo(){let e=trigger.getBoundingClientRect(),_=this.wrapper.getBoundingClientRect(),t=e.bottom-_.height,i=e.left-_.width;t<0&&(t=e.top+e.height),i<0&&(i=e.left),t+_.height>window.innerHeight&&(t=window.innerHeight-_.height),i+_.width>window.innerWidth&&(i=window.innerWidth-_.width),this.wrapper.style.top=window.innerWidth>420?`${t}px`:"10px",this.wrapper.style.left=window.innerWidth>420?`${i}px`:void 0;let s=(e.left-i+e.width/2)/_.width*100,r=(e.top-t+e.height/2)/_.height*100;this.wrapper.style.transformOrigin=`${s}% ${r}%`,this.wrapper.classList.add("qzz__appear")}quizEnd(){this.options?.onFinish?.(this.answers)}renderQuestion(e){let _=this.questions.find(_=>_.id===e),t=this.rendered.find(_=>_.id===e);if(_&&!t){let i=e=>{this.appearQuestion(e.nextId),this.answers[_.id]={answer:e.answer}};_.render?.(i),this.rendered.push(_)}}appearQuestion(e,_=!0){let t=this.rendered.find(_=>_.id===e);if(this.current=t,!t){this.quizEnd(),console.log(this.answers);return}t.buttons.forEach(e=>{this.renderQuestion(e.nextId)}),t.appear?.(_),this.prev?.dissapear?.(),this.prev=t}start(){this.started||(this.renderQuestion(this.questions?.[0].id),this.appearQuestion(this.questions?.[0].id,!1),this.started=!0)}}