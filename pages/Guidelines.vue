<template>
    <div :class="bemm()">
      <div :class="[bemm('content'), 'content']">
        <section>
          <h1>Guidelines</h1>
        </section>



        <section>
        <p>At the Open Icon Foundation, we value consistency, quality, and accessibility in our icons. To ensure that our icon library remains cohesive and user-friendly, we have established the following design guidelines:</p>
        <ol>
            <li><strong>Consistency</strong><br /> Icons should seamlessly integrate with our existing library of icons. They should share a consistent visual style, stroke thickness, and overall design language. Prioritize maintaining a harmonious look and feel across all icons.</li>
            <li><strong>Line-Based Design</strong><br /> Icons should primarily consist of lines and strokes rather than solid fills. This line-based approach helps maintain clarity and adaptability when icons are scaled or modified for various purposes.</li>
            <li><strong>Vector Format</strong><br /> All icons must be created in vector formats such as SVG (Scalable Vector Graphics). Vector graphics ensure that icons remain crisp and sharp at any size, making them versatile for different applications.</li>
            <li><strong>Minimalism and Cleanliness</strong><br /> Icons should adhere to a minimalistic design approach, conveying their intended meaning with clarity and simplicity. Avoid unnecessary complexity or clutter. Strive for clean and well-defined shapes.</li>
            <li><strong>Clarity and Recognizability</strong><br /> Icons should be instantly recognizable, even at small sizes. Avoid ambiguity or overly abstract designs that may confuse users. Icons should effectively communicate their intended concept.</li>
            <li><strong>Scalability</strong><br /> Icons should be designed with scalability in mind. They should look clear and well-proportioned at various sizes, from small icons used in mobile apps to larger icons on websites or desktop applications.</li>
            <li><strong>Stroke Consistency</strong><br /> Maintain consistent stroke thickness throughout the icon. Avoid variations in stroke width, as it can create visual inconsistency.</li>
            <li><strong>Color Usage</strong><br /> Icons should be designed in black or a single color to ensure versatility and adaptability to different design contexts. Avoid using multiple colors within the icon itself.</li>
            <li><strong>Negative Space</strong><br /> Pay attention to negative space within the icon. Ensure that negative spaces are well-balanced, and there is no unintentional overlap or clutter within the design.</li>
            <li><strong>Clear Intent</strong><br /> Icons should have a clear and easily understandable purpose. They should represent a concept or action in a straightforward manner without unnecessary ambiguity.</li>
            <li><strong>Aspect Ratio</strong><br /> Icons should maintain a consistent aspect ratio to prevent distortion when resized. If an icon has variations (e.g., directional arrows), ensure they maintain proportional relationships.</li>
            <li><strong>Grid Alignment</strong><br /> When designing icons, consider using a grid system to align elements. This ensures precision and consistency in the positioning of lines and shapes.</li>
            <li><strong>Test at Different Sizes</strong><br /> Before finalizing an icon, test it at various sizes to ensure it remains legible and visually appealing, even when scaled down to the smallest dimensions.</li>
            <li><strong>Avoid Text</strong><br /> Icons should be self-explanatory without relying on text labels. Avoid incorporating text within the icon design, as it may not be language-neutral and can limit usability.</li>
            <li><strong>Accessibility</strong><br /> Icons should be designed with accessibility in mind. Ensure that the contrast between the icon and its background is sufficient to make it visible and usable for individuals with visual impairments.</li>
            <li><strong>Open Licensing</strong><br /> Icons contributed to our library should be made available under an open and permissive license, allowing others to use, modify, and distribute them freely.</li>
            <li><strong>Avoid Redundancy</strong><br /> Before creating a new icon, check if a similar one already exists in our library. Avoid redundancy by reusing existing icons whenever possible.</li>
        </ol>
    </section>



      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useBemm } from "bemm";
  const bemm = useBemm("guidelines");
  </script>
  
  <style lang="scss">
  .guidelines {
    padding: var(--space);
  }
  </style>
  