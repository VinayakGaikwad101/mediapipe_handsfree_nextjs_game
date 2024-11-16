import * as Tone from "tone";

let bgPlayer: Tone.Player;
let lowPass: Tone.Filter;

export async function playBackground(distort: boolean) {
  if (!bgPlayer) {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    const randomSongUrl = `/${randomIndex}.m4a`;

    bgPlayer = new Tone.Player({
      url: randomSongUrl,
      loop: true,
    }).toDestination();
    lowPass = new Tone.Filter(400, "lowpass").toDestination();
    await Tone.loaded();
    bgPlayer.start();
  }

  if (distort) {
    bgPlayer.disconnect().chain(lowPass);
  } else {
    bgPlayer.disconnect(lowPass).toDestination();
  }
}

export async function playFX() {
  const effectsPlayer = new Tone.Player({
    url: "/rock.m4a",
    loop: false,
  }).toDestination();
  await Tone.loaded();
  effectsPlayer.start();
}
