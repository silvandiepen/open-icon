<template>
  <div :class="bemm()">
    <div :class="[bemm('content'), 'content']">
      <section>
        <h1>Contributors</h1>
        <p>
          Whether you're here to actively contribute to our mission or simply
          want to learn more about how you can get involved, we're delighted to
          have you here.
        </p>
      </section>

      <section>
        <h2>Why Contribute?</h2>
        <p>
          At the Open Icon Foundation, we believe that icons are a universal
          language of visual communication, and we're committed to making them
          accessible to everyone. Your contributions, big or small, can play a
          pivotal role in advancing this mission. Here are a few ways you can be
          a part of our journey:
        </p>
      </section>

      <section>
        <h2>Contribute</h2>
        <p>
          We welcome contributions from designers who share our commitment to
          creating high-quality, consistent, and accessible icons. Here's how to
          make a pull request to add or edit icons in our library:
        </p>
        <ol>
          <li>
            <strong>Fork the Repository:</strong> Start by forking our
            repository on
            <a href="https://github.com/OpenIconFoundation">GitHub</a> to create
            a copy of it in your own GitHub account.
          </li>
          <li>
            <strong>Create a New Branch:</strong> Create a new branch in your
            forked repository. Give it a descriptive name related to the icon(s)
            you plan to work on.
          </li>
          <li>
            <strong>Design Your Icons:</strong> Using vector design software
            (e.g., Adobe Illustrator, Inkscape), create your icons following the
            guidelines mentioned above.
          </li>
          <li>
            <strong>File Format:</strong> Save your icons in SVG format. Ensure
            that your SVG file contains only vector shapes and lines without any
            raster elements.
          </li>
          <li>
            <strong>Documentation:</strong> Include a README file in your pull
            request that provides a brief description of the icon(s) and any
            relevant licensing information. Make it easy for reviewers to
            understand the purpose of your icons.
          </li>
          <li>
            <strong>Commit and Push:</strong> Commit your changes to your branch
            and push them to your forked repository on GitHub.
          </li>
          <li>
            <strong>Submit a Pull Request:</strong> Go to the original Open Icon
            Foundation repository and create a pull request from your branch.
            Describe your changes and icons in the pull request description.
          </li>
          <li>
            <strong>Review and Collaboration:</strong> Our team will review your
            pull request for adherence to our guidelines and quality standards.
            We may provide feedback and collaborate with you to ensure your
            icons meet our criteria.
          </li>
          <li>
            <strong>Merge and Acknowledgment:</strong> Once your pull request is
            approved, it will be merged into our main repository, and your
            contribution will be acknowledged in our list of contributors.
          </li>
        </ol>
        <p>
          By following these guidelines and steps, you can contribute to our
          mission of providing a comprehensive library of high-quality,
          standardized icons that empower creativity and accessibility for
          everyone.
        </p>
      </section>
      <section>
        <h2>Volunteer</h2>
        <p>
          <strong>Who Can Volunteer:</strong> We welcome volunteers from diverse
          backgrounds, including designers, developers, writers, and anyone
          passionate about icons and accessibility.
        </p>
        <p><strong>How to Volunteer:</strong></p>
        <ul>
          <li>
            Reach out to us at
            <a href="mailto:contribute@open-icons.org"
              >contribute@open-icons.org</a
            >
            expressing your interest in volunteering.
          </li>
          <li>Describe your skills and how you'd like to contribute.</li>
          <li>
            We'll get in touch with you to discuss potential opportunities.
          </li>
        </ul>
      </section>
      <section>
        <h2>Donate</h2>
        <p>
          <strong>Why Donate:</strong> Your financial support helps sustain our
          efforts to standardize icons and make them accessible to all. Your
          contributions fund the development of open icon standards, tools, and
          educational resources.
        </p>
        <p><strong>How to Donate:</strong></p>
        <ul>
          <li>
            Visit our <NuxtLink to="/donate">Donation Page</NuxtLink> to make a
            secure online donation.
          </li>
          <li>
            Consider setting up recurring donations to support our ongoing
            initiatives.
          </li>
          <li>
            Your generosity is greatly appreciated and makes a significant
            impact on our mission.
          </li>
        </ul>
      </section>

      <!-- For Those Exploring Our Work -->
      <section>
        <h3>For Those Exploring Our Work</h3>
        <p>
          If you're not yet ready to contribute but are interested in learning
          more about our work, we welcome you to explore the following
          resources:
        </p>
        <ul>
          <li>
            <strong>Educational Resources:</strong> Visit our educational hub to
            access valuable tutorials, guides, and insights about the power of
            icons in design and communication.
          </li>
          <li>
            <strong>Newsletter:</strong> Subscribe to our newsletter to stay
            updated on the latest trends in icon standardization and design. We
            regularly share informative content to keep you informed and
            inspired.
          </li>
          <li>
            <strong>Social Media:</strong> Follow us on social media to join the
            conversation, share your thoughts, and interact with our community.
          </li>
        </ul>
      </section>

      <!-- Join Us in Empowering Creativity -->
      <section>
        <h3>Join Us in Empowering Creativity</h3>
        <p>
          The Open Icon Foundation thrives on the support and collaboration of
          individuals like you who are passionate about icons and accessibility.
          By contributing your time, skills, and resources or by simply staying
          informed about our work, you become a part of our mission to make
          icons universally accessible and empower creativity worldwide.
        </p>
        <p>
          If you have any questions or need further assistance regarding your
          contributions or how to engage with our work, please don't hesitate to
          contact us at
          <a href="mailto:contribute@open-icons.org"
            >contribute@open-icons.org</a
          >. Together, we can revolutionize the world of icons and create a more
          inclusive visual language for all.
        </p>
        <p>Thank you for your interest in the Open Icon Foundation!</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("contributors");
</script>

<style lang="scss">
.contributors {
  padding: var(--space);
}
</style>
