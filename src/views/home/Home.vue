<template>
  <div class="home-box">
    <div class="logo-box">
      <!-- <el-image :src="logo" fit="fill" :lazy="true" class="logo-vue"></el-image>
      <el-image :src="elLogo" fit="fill" :lazy="true"></el-image>
      <el-image :src="piLogo" fit="fill" :lazy="true" class="logo-pinia"></el-image> -->
      <img src="@/assets/images/logo.png" alt="Vue logo" class="logo-vue" />
      <img src="@/assets/images/el-logo.svg" alt="Vue logo" class="logo-el" />
      <img src="@/assets/images/pinia-logo.svg" alt="Vue logo" class="logo-pinia" />
    </div>
    <div class="operation">
      {{ t("change theme") }}：
      <el-switch v-model="isDark" @change="toggleDark"> </el-switch>
      {{ t("change lang") }}：
      <el-select
        v-model="language"
        value-key="en"
        placeholder="请选择语言"
        clearable
        filterable
        @change="toggleLocales"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <HelloWorld :msg="`${t('welcome to')} Vue 3 + ElementPlus + Pinia + Vite`" />
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from "@/utils/dark";
import logo from "@/assets/images/logo.png";
import elLogo from "@/assets/images/el-logo.svg";
import piLogo from "@/assets/images/pinia-logo.svg";

const { t, locale } = useI18n();
const language = ref("en");
const options = [
  {
    value: "en",
    label: "英文",
  },
  {
    value: "zh-CN",
    label: "中文",
  },
];
const toggleLocales = (val: string) => {
  locale.value = val;
};
</script>

<style lang="scss" scoped>
.logo-box {
  margin-bottom: 20px;
  img {
    display: inline-block;
  }
  .logo-vue {
    width: 18%;
  }
  .logo-el {
    width: 45%;
    margin: 0 20px 0 10px;
  }
  .logo-pinia {
    width: 15%;
  }
}
</style>
