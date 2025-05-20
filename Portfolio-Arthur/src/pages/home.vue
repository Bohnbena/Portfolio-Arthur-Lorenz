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


    <div class="pt-28 pr-5 md:col-start-3 md:pr-14">
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

          <n-space vertical class="mt-10">
            <n-card title="Soft Skills & Arbeitsweise" size="small">
              <div class="flex flex-col gap-3">
                <div>
                  - ich schätze klare Kommunikation und arbeite gerne im Team, um gemeinsame Ziele zu erreichen.
                </div>
                <div>
                  - Feedback betrachte ich als Chance, mich weiterzuentwickeln.
                </div>
              </div>
            </n-card>
            <n-card title="Lernbereitschaft & Entwicklung" size="small" class="mt-5">
              <div class="flex flex-col gap-3">
                <div>
                  - Ich bilde mich regelmäßig weiter, um technisch und fachlich auf dem neuesten Stand zu bleiben.
                </div>
                <div>
                  - in meiner Freizeit beschäftige ich mich gerne mit neuen Technologien und Programmiersprachen wie mit
                  Vue + Vite und diversen Frameworks.
                </div>
              </div>
            </n-card>
            <n-card title="Motivation & Haltung" size="small" class="mt-5">
              <div class="flex flex-col gap-3">
                <div>
                  - Meine Leidenschaft für Technik entsteht aus dem Wunsch, kreative und sinnvolle Lösungen für reale
                  Probleme zu entwickeln.
                </div>
                <div>
                  - Ich arbeite gerne an sinnvollen Anwendungen, die Nutzer*innen echten Mehrwert bieten.
                </div>
                <div>
                  - Dabei begeistert mich nicht nur das Ergebnis, sondern auch der Weg dorthin – vom ersten Konzept bis
                  zum letzten Feinschliff im Code.
                </div>
              </div>
            </n-card>
          </n-space>
        </selection>
      </n-space>
    </div>

    <div class="mt-30 pr-5 lg:ml-80 md:ml-55">
      <selection id="erfahrung">
        <n-timeline>
          <n-timeline-item
              type="success"
              title="Laurentius-Grundschule Bobingen"
              content="Grundschulabschluss"
              time="2010 - 2014"
          />
          <n-timeline-item
              type="success"
              title="Dr.-Jaufmann-Mittelschule Bobingen"
              time="2014 - 2016"
          />
          <n-timeline-item
              type="success"
              title="Gymnasium Talant - Kirgistan,Bischkek"
              content="Allgemeinbildende Schulabschluss"
              time="2016 - 2020"
          />
          <n-timeline-item
              type="success"
              title="Berufsvorbereitender Lehrgang"
              content="Dienstleistungen
            Deutsche Angestellten-Akademie"
              time="09.2021 - 07.2022"
          />
          <n-timeline-item
              type="success"
              title="Hotelfachmann"
              content="Im Qu Hotel Augsburg"
              time="01.09.2022 - 17.11.2022"
          />
          <n-timeline-item
              type="success"
              title="Dr.-Jaufmann-Mittelschule Bobingen"
              content="Mittlerer Schulabschluss"
              time="11.2022 - 07.2023"
          />
          <n-timeline-item
              type="info"
              title="TopM Software GmbH"
              content="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
              time="11.2023 - Heute"
          />
        </n-timeline>
      </selection>
    </div>

    <div>
      <slection id="zukunft">
      <div class="pr-10 flex flex-col gap-3" >
        <p class="font-bold text-2xl mt-30">Blick in die Zukunft</p>
        <div>
          <p class="flex flex-col gap-4">
            <div>
              Ich wünsche mir für die Zukunft ein Projekt, bei dem ich meine volle Leidenschaft für Technik und Entwicklung einbringen kann. Besonders wichtig ist mir dabei, an etwas zu arbeiten, das nicht nur funktional ist, sondern echte Wirkung zeigt – sei es im Alltag von Nutzer*innen oder innerhalb eines Teams.
            </div>
            <div>
              Ich möchte meine bestehenden Kenntnisse kontinuierlich erweitern und mich in neue Technologien einarbeiten – sowohl im Frontend als auch im Backend. Gleichzeitig fasziniert mich der Bereich Embedded Systems, weil hier Software auf Hardware trifft und spannende Herausforderungen entstehen.
            </div>
            <div>
              Mein Ziel ist es, in einem Umfeld zu arbeiten, in dem ich wachsen, lernen und mit anderen gemeinsam innovative Lösungen schaffen kann.
            </div>
          </p>
        </div>
      </div>
      </slection>
    </div>


    <div>
      <selection id="kontakt">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-bold mt-30 ">Kontakt</p>
        <div class="flex gap-3">
          <p>E-Mail:</p>
          <div>
            <p>Arthur1010519@gmail.com</p>
          </div>
        </div>
        <div class="text-blue-300">
          <a href="https://www.linkedin.com/in/arthur-lorenz-450ba2327/">LinkedIn</a>
        </div>
      </div>
      </selection>
    </div>

    <div class="mt-70">
      <p>Diese Seite wurde Erstellt mit Vite,Vue,TailwindCSS,NaiveUI</p>
    </div>
  </div>
</template>

<style scoped>

</style>