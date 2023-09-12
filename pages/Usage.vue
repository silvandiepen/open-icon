<template>
    <div :class="bemm()">
      <div :class="[bemm('content'), 'content']">
        <header>
        <h1>Icon Usage Guidelines</h1>
    </header>

    <section>
        <p>Icons from the Open Icon Foundation are versatile and can be utilized in a wide range of applications, both digital and physical. Our commitment to open icon standards and accessibility means you can confidently use our icons in various contexts, ensuring a consistent and visually appealing experience for your audience.</p>
    </section>

    <section>
        <h2>1. Digital Media and Mobile Apps</h2>
        <p>Icons are an essential component of digital design and user interfaces, including mobile applications. You can use our icons in:</p>
        <ul>
            <li>Website design and development</li>
            <li>Mobile app interfaces for iOS and Android</li>
            <li>Email templates and newsletters</li>
            <li>Social media graphics</li>
            <li>Blog posts and articles</li>
            <li>User interface elements (buttons, menus, etc.)</li>
            <li>Interactive presentations</li>
        </ul>
    </section>

    <section>
        <h2>2. Print Materials</h2>
        <p>Icons are equally valuable in print materials, adding visual clarity and engagement to your printed content. Use our icons in:</p>
        <ul>
            <li>Brochures and pamphlets</li>
            <li>Business cards</li>
            <li>Posters and flyers</li>
            <li>Magazines and newspapers</li>
            <li>Product packaging</li>
            <li>Menus and restaurant materials</li>
            <li>Event programs and signage</li>
        </ul>
    </section>

    <section>
        <h2>3. Product Packaging</h2>
        <p>Add a professional touch to your product packaging with our icons. Use them on:</p>
        <ul>
            <li>Labels and stickers</li>
            <li>Box design</li>
            <li>Instruction manuals</li>
            <li>Product inserts</li>
        </ul>
    </section>

    <section>
        <h2>4. Advertisements</h2>
        <p>Create compelling advertisements with our icons to capture the attention of your audience. Use them in:</p>
        <ul>
            <li>Print advertisements (newspapers, magazines, billboards)</li>
            <li>Online ads (banners, social media ads)</li>
            <li>Video commercials and animations</li>
            <li>Email marketing campaigns</li>
        </ul>
    </section>

    <section>
        <h2>5. Presentations</h2>
        <p>Enhance your presentations, whether in business or education, by integrating our icons into your slides. They can be used in:</p>
        <ul>
            <li>PowerPoint or Keynote presentations</li>
            <li>Educational materials</li>
            <li>Training materials and workshops</li>
            <li>Conference and event presentations</li>
        </ul>
    </section>

    <section>
        <h2>6. Accessibility</h2>
        <p>Our commitment to accessibility means that our icons are designed to be inclusive and usable by individuals with disabilities. Use our icons to improve accessibility in:</p>
        <ul>
            <li>Accessible web and app design</li>
            <li>Braille and tactile graphics</li>
            <li>Accessible signage and wayfinding</li>
            <li>Assistive technology interfaces</li>
        </ul>
    </section>

    <section>
        <h2>7. Customization</h2>
        <p>Our icons are versatile and can be customized to suit your specific needs. You can adjust their size, color, and style to match your brand or project requirements while maintaining the core icon concept.</p>
    </section>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useBemm } from "bemm";
  const bemm = useBemm("use");
  </script>
  
  <style lang="scss">
  .use {
    padding: var(--space);
  }
  </style>
  