<template>
  <grid
    class="middle"
    col="2"
    gap="40px"
    style="grid-template-columns: 100px auto; padding-bottom: 20px"
  >
    <c class="subdued" style="padding-top: 4px">
      {{ year }}
    </c>
    <c>
      <p style="font-size: 18px; font-weight: 600">{{ title }}</p>
      <p style="font-size: 16px">{{ position }} at {{ company }}</p>

      <p class="subdued" style="font-size: 12px; padding-bottom: 4px">
        {{ location }}
      </p>

      <div class="subdued">
        <details>
          <summary>Details</summary>
          <ul style="list-style: disc">
            <li v-for="detail in details">
              {{ detail }}
            </li>
          </ul>
        </details>
      </div>
      <br />

      <grid
        class="middle"
        col="2"
        style="grid-template-columns: 100px auto; padding-bottom: 20px"
      >
        <c
          v-for="caseStudy in caseStudies"
          style="
            text-align: center;
            align-items: center;
            display: grid;
            justify-content: center;
            align-content: center;
          "
        >
          <a
            v-if="caseStudy.url"
            class="big-buttons base-text"
            :href="caseStudy.url"
          >
            <div style="margin-top: 10px">
              <!-- :src="require(`~/assets/img/` + caseStudy.imgLocation)" -->
              <!-- :src="require(`~/assets/img/` + `tds_logo.png`)" -->
              <!-- :src="require('~/assets/img/VTS_case_study.png')" -->
              
              <img
              style="height: 100px; width: auto; margin-right: 10px"
              :src="getImageUrl(caseStudy.img)"
                
              />
            </div>
            <p style="font-size: 16px; margin-top: 8px">
              {{ caseStudy.name }}
              <span class="link-img" style="white-space: nowrap"></span>
            </p>
          </a>
          <div v-else class="base-text">
            <div style="margin-top: 10px">
              <img
                style="height: 100px; width: auto; margin-right: 10px"
                :src="getImageUrl(caseStudy.img)"
              />
            </div>
            <p v-if="caseStudy.name" style="font-size: 16px; margin-top: 8px">
              {{ caseStudy.name }}
            </p>
          </div>
        </c>
      </grid>
    </c>
  </grid>
</template>
<script>
export default {
  name: 'WorkExperience',
  props: [
    'year',
    'title',
    'position',
    'company',
    'location',
    'details',
    'caseStudies'
  ],

  methods: {
    getImageUrl(srcurl) {
      const imageUrl = new URL(`../assets/img/${srcurl}`, import.meta.url).href
      return imageUrl;

    }
  }
};
</script>
