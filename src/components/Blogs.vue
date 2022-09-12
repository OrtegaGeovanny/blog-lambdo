<template>
  <div>
    <h2>Blogs</h2>
    <div class="flex sm:flex-col md:flex-row lg:flex-row space-x-5">
      <div v-for="blog in props.blogs.posts" :key="blog.id">
        <a :href="blog.url" target="_blank">
          <div
            class="rounded-xl w-96 text-white shadow-2xl transition ease-in-out delay-75 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-150"
          >
            <img
              class="rounded-t-xl object-fill h-48 w-96"
              :src="blog.feature_image"
            />
            <span class="pl-5 uppercase text-xs">{{
              moment(blog.updated_at).format("dddd, MMMM Do, YYYY")
            }}</span>
            <div class="divide -mt-3 text-amber-300 pl-5">____</div>
            <div class="pl-5 pr-5 pb-5">
              <div class="text-xl font-bold decoration-neutral-400">
                <span>{{ blog.title }}</span>
              </div>
              <div class="truncate pb-5">{{ blog.excerpt }}</div>
              <span class="text-xs grid justify-items-end"
                >{{ blog.reading_time }} min read</span
              >
            </div>
          </div>
        </a>
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
const props = defineProps(["blogs"]);
</script>
