import type { AudioClip } from "./types"

interface DrumProps {
    audioClip :AudioClip;
}
 
const Drum = ({audioClip}: DrumProps) => {
  const playSound = (clip:AudioClip)=>{
      (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
      document.getElementById("display")!.innerText = clip.description;
  }
  return (
    <div>
      <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={()=> playSound(audioClip)}
       >
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
         {audioClip.keyTrigger}
      </button>
    </div>
  )
}

export default Drum
