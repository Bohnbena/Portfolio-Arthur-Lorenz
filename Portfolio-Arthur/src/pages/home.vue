<script setup>
  import git from '../assets/All_logo_and_pictures-main/others/git.svg'
  import java from '../assets/All_logo_and_pictures-main/programming_languages/java.svg'
  import go from '../assets/All_logo_and_pictures-main/programming_languages/go.svg'
  import vue from '../assets/All_logo_and_pictures-main/frameworks/vuejs.svg'
  import mongodb from '../assets/All_logo_and_pictures-main/databases/mongodb.svg'
  import mysql from '../assets/All_logo_and_pictures-main/databases/mysql.svg'
  import intelji from '../assets/All_logo_and_pictures-main/ides/intellij.svg'
  import skill from '../components/skill.vue'
</script>

<template>

  <div class="row-start-2 row-end-2 col-start-3 col-end-7 font-bold text-5xl uppercase">
    <section id="start">
      <p>Arthur Lorenz</p>
    </section>
  </div>

  <div class="font-big-text col-start-5 col-end-13 row-start-3 pt-10 pr-10 md:col-start-3 md:col-end-8">
    <p>
      Ich bin 22 Jahre alt und befinde mich aktuell in der Ausbildung zum Anwendungsentwickler. Meine Leidenschaft gilt
      der Programmierung.
    </p>
  </div>

  <div class="col-start-5 col-end-13 row-start-5 font-big-text md:col-start-3 ">
    <section id="wer" class="pr-10 md:pr-44">
      <n-collapse>
        <n-collapse-item title="Meine Leidenschaft ✨" name="1">
          <div>
            Ich liebe es, neue Dinge zu lernen und zu erforschen. Die Welt der Softwareentwicklung fasziniert mich, weil
            sie ständig neue Herausforderungen und Möglichkeiten bietet, mich weiterzuentwickeln.
          </div>
        </n-collapse-item>
        <n-collapse-item title="Eigenschaften ☄️" name="2">
          <div>
            Ich bin verantwortungsvoll, pünktlich und lernbereit – besonders wenn man mit mir zusammenarbeiten möchte.
            Disziplin, Ausdauer und Teamfähigkeit zeichnen mich aus, sowohl im Beruf als auch im Alltag.
          </div>
        </n-collapse-item>
        <n-collapse-item title="Meine Hobbys 🤼‍♀️" name="3">
          <div>
            In meiner Freizeit beschäftige ich mich gerne mit Programmieren, arbeite an vielen neuen Projekten und
            vertiefe mich in philosophische Themen. Seneca ist mein Lieblingsphilosoph. Außerdem trainiere ich
            regelmäßig Kampfsport, um Körper und Geist in Einklang zu bringen.
          </div>
        </n-collapse-item>
      </n-collapse>
    </section>

    <div class="pt-32 pr-5  md:col-start-3 md:pr-56">
      <n-space vertical>
        <selection id="fahigkeiten">
          <skill
              skills="java"
              :source="java"
              precent="75"
              color="orange"
          ></skill>
          <skill
              skills="git"
              :source="git"
              precent="70"
              color="red"
          ></skill>
          <skill
              skills="mysql"
              :source="mysql"
              precent="70"
              color="blue"
          ></skill>
          <skill
              skills="vuejs"
              :source="vue"
              precent="65"
              color="green"
          ></skill>
          <skill
              skills="golang"
              :source="go"
              precent="50"
              color="brightblue"
          ></skill>

          <n-collapse class="mt-10">
            <n-collapse-item title="Weiteres" name="" class="">
              <div class="ml-10">
                <skill
                    skills="intelji"
                    :source="intelji"
                    precent="50"
                    color="black"
                ></skill>
                <skill
                    skills="mongodb"
                    :source="mongodb"
                    precent="35"
                    color="green"
                ></skill>
              </div>

            </n-collapse-item>
          </n-collapse>

        </selection>
      </n-space>
    </div>

  </div>

  <div class="col-start-5 col-end-12 row-start-12">
  </div>


  <div class="row-start-6">
  </div>
</template>

<style scoped>

</style>