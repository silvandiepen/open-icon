<template>
  <div :class="bemm()">
    <div :class="[bemm('content'),'content']">
      <section>
        <h1>About</h1>
        <p>
          The <strong>Open Icon Foundation</strong> is a non-profit organization
          dedicated to revolutionizing the world of icons. Our mission is to
          standardize icons and make them universally accessible, empowering
          designers, developers, and creators worldwide to enhance their
          projects with high-quality icons effortlessly.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          At the Open Icon Foundation, our mission is crystal clear:
          <strong>Standardize Icons, Empower Creativity</strong>. We believe
          that icons are the universal language of visual communication, and
          they should be available to everyone, regardless of their skill level
          or resources. Our core objectives include:
        </p>
        <ul>
          <li>
            <strong>Standardization:</strong> We work tirelessly to create and
            promote open icon standards that simplify icon usage across various
            platforms and applications.
          </li>
          <li>
            <strong>Accessibility:</strong> We are committed to ensuring that
            icons are accessible to all, fostering inclusivity and creativity.
          </li>
          <li>
            <strong>Education:</strong> We provide resources and tools to
            educate and inspire designers, developers, and creators about the
            power of icons.
          </li>
        </ul>
      </section>

      <section>
        <h2>What We Do</h2>
        <p>
          Our foundation's work encompasses a wide range of activities and
          initiatives, including:
        </p>
        <ol>
          <li>
            <strong>Icon Standardization:</strong> We develop and maintain open
            icon standards that streamline icon integration across different
            software and platforms.
          </li>
          <li>
            <strong>Icon Library:</strong> Our extensive icon library offers a
            diverse collection of high-quality icons that are free for anyone to
            use, modify, and distribute.
          </li>
          <li>
            <strong>Icon Tools:</strong> We develop and promote tools and
            software that simplify the creation, customization, and deployment
            of icons.
          </li>
        </ol>
      </section>

      <section>
        <h2>Why Choose Open Icon Foundation?</h2>
        <ul>
          <li>
            <strong>Icon Standards Pioneers:</strong> We are at the forefront of
            creating and promoting open icon standards that benefit the entire
            design and development community.
          </li>
          <li>
            <strong>Accessibility Advocates:</strong> Our commitment to
            accessibility ensures that icons are available to individuals and
            organizations of all sizes and backgrounds.
          </li>
          <li>
            <strong>Educational Resources:</strong> We provide valuable
            resources, tutorials, and guides to help you harness the full
            potential of icons in your projects.
          </li>
        </ul>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          There are several ways you can get involved with the Open Icon
          Foundation:
        </p>
        <ul>
          <li>
            <strong>Donate:</strong> Your financial support helps us continue
            our mission to standardize icons and make them accessible to all.
            [Include a donation link or button.]
          </li>
          <li>
            <strong>Volunteer:</strong> Join our passionate team of volunteers
            and contribute your expertise to our icon standardization efforts.
          </li>
          <li>
            <strong>Contribute Icons:</strong> If you're a designer or creator,
            consider contributing icons to our open library to help others
            enhance their projects.
          </li>
          <li>
            <strong>Stay Informed:</strong> Subscribe to our newsletter and
            follow us on social media to stay updated on the latest in icon
            standardization and design trends.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          We welcome your input, questions, and collaboration opportunities:
        </p>
        <address>
          <p><strong>Address:</strong> [Open Icon Foundation's Address]</p>
          <p><strong>Phone:</strong> [Open Icon Foundation's Contact Number]</p>
          <p><strong>Email:</strong> [Open Icon Foundation's Contact Email]</p>
          <p>
            <strong>Social Media:</strong> [Links to Open Icon Foundation's
            Social Media Profiles]
          </p>
        </address>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("about");
</script>

<style lang="scss">

.about{
    padding: var(--space);
}
</style>
