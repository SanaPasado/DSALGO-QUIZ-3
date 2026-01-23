import React from 'react'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <div className="whitebox" style={{ marginTop: 20 }}>
        <h1>About LoopedByKlayd</h1>
        <p>
          Hey — we make small handmade crochet things with lots of love. This
          little shop started because someone wanted a cute penguin and couldn't
          find one, so we learned to crochet instead. Now we make plushies,
          flowers, and tiny accessories you can actually use.
        </p>

        <h3 style={{ marginTop: 18 }}>What we care about</h3>
        <ul>
          <li>Quality — every stitch is hand-checked</li>
          <li>Originality — most pieces are one-offs</li>
          <li>Customer happiness — we reply fast (usually)</li>
        </ul>

        <p style={{ marginTop: 12 }}>
          If you want a custom piece, head to the Custom Orders page and tell
          us what you're dreaming of. We normally ship locally within a week.
        </p>
      </div>
    </Layout>
  )
}

export default About

