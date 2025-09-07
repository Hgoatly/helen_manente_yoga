import React from 'react';
import './HomepageText.css';
import WorkWithMeButton from "../components/WorkWithMeButton";

function HomepageText() {
  return (
    <div className="homepage-text">
      <h2>Welcome to your yoga community!</h2>
      <p>A place for you to feel completely comfortable in your own skin. A place where you can feel at ease. A place to explore your physical, mental and emotional wellbeing through yoga.</p>
      <p>I’m Helen, a Kent based yoga teacher on a quest to support you in your wellbeing. Holding a 500 hour British Wheel of Yoga Level 4 Teaching Diploma and hundreds of hours of teaching experience, I offer a range of sessions to suit <em>every body</em>. Every class includes asana (postures and movement), pranayama (breathing exercises) and meditation, all topped off with a guided relaxation!</p>
      <p>Whether you’re a complete beginner or have an established yoga practice, there’s something for you at my classes. Whatever your age, gender identity, state of health or physical fitness, you’ll be welcomed with open arms.</p>
      <p>So…</p>
      <p>If you’re wondering how yoga can benefit you,</p>
      <p>If you find yourself seeking deeper connection with yourself and the world around you,</p>
      <p>Or you’re looking for a teacher who is just like you – very much on their own journey,</p>
      <p>But you want the reassurance of working with a teacher who has spent a considerable amount of time studying anatomy, physiology, sequencing and ethics,</p>
      <p>And if it’s important to you that your teacher is interested in <em>you</em> as a whole person, not just what fancy shapes you can make,</p>
      <p>I’d love to hear from you!</p>
      <p>Because yoga isn’t about changing yourself – it’s about uncovering who you’ve been all along.</p>
      <WorkWithMeButton />
    </div>
  );
}

export default HomepageText;