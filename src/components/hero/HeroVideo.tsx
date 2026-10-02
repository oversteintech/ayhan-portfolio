/**
 * Looping ambient background for the hero. Muted inline autoplay is the most
 * reliable path for decorative background video across desktop and mobile.
 */
export default function HeroVideo() {
  return (
    <video
      className="hero-video"
      poster="/media/hero-field-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/media/hero-field.mp4" type="video/mp4" />
    </video>
  );
}
