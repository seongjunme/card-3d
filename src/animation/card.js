import gsap from "gsap";

export const switchCard = (card1, card2, onComplete) => {
  gsap.to(card1.rotation, { y: 0, duration: 1 });
  gsap.to(card1.scale, { ...card2.scale, duration: 1 });
  gsap.to(card1.position, { ...card2.position, duration: 1 });
  gsap.to(card2.scale, { ...card1.scale, duration: 1 });
  gsap.to(card2.position, { ...card1.position, duration: 1, onComplete });
};
