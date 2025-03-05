<template>
  <div class="page-container">
    <h1 class="text-4xl text-white text-center font-bold mb-12">Alimentação</h1>
    <div class="container mx-auto py-12 px-4 mt-12">
      <div
        class="flex flex-col md:flex-row items-stretch justify-center gap-6 flex-wrap"
      >
        <div
          v-for="rota in rotas"
          :key="rota.nome"
          class="bg-white p-6 rounded-lg shadow-lg border-4 border-amber-300 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <h2
            class="text-2xl font-bold text-center mb-4 flex items-center justify-center"
          >
            <Icon
              :name="rota.icone || 'material-symbols:restaurant'"
              size="28"
              class="text-amber-500 mr-2"
            />
            {{ rota.nome }}
          </h2>

          <table class="w-full text-left">
            <tbody>
              <tr
                v-for="local in rota.locais"
                :key="local.nome"
                class="border-b border-gray-200 last:border-0"
              >
                <td class="py-3 align-top">
                
                  <a
                    :href="local.insta"
                    target="_blank"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                  <Icon name="mdi:instagram" size="14" class="text-purple-500" />
                    <span class="ml-2">{{ local.nome }}</span>
                  </a>
                  <a :href="local.link" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    <Icon name="mdi:map-marker" class="mr-1 text-red-500" />
                    <p class="text-gray-600 text-sm ml-2">{{ local.endereco }}</p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex justify-center mt-12">
        <button
          @click="() => navigateTo('/')"
          class="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors flex items-center"
        >
          <Icon name="mdi:arrow-left" class="mr-2" />
          Voltar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const rotas = [
{
    nome: 'Rota Gastronômica',
    icone: 'hugeicons:menu-restaurant',
    locais: [
      {
        nome: 'Figueira Steak House',
        endereco: 'Rua Mariana Bronnemann, 527 - Velha, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Figueira+Restaurante/@-26.911982,-49.0879014,17z/data=!3m1!4b1!4m6!3m5!1s0x94df192bbbd5d5bb:0x2a96366e69456282!8m2!3d-26.9119868!4d-49.0853265!16s%2Fg%2F1tdwlnt4?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/figueirabnu/',
      },
      {
        nome: 'Rosa Mexicana',
        endereco: 'Rua Carlos Rischbieter, 61 - Victor Konder, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Rosa+Mexicano/@-26.9072606,-49.2379063,11z/data=!4m10!1m2!2m1!1sRosa+Mexicana!3m6!1s0x94df18d2677a24bd:0x3e1868fa95a1925b!8m2!3d-26.9072606!4d-49.0731114!15sCg1Sb3NhIE1leGljYW5hIgOIAQFaDyINcm9zYSBtZXhpY2FuYZIBEm1leGljYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11btx0cz5k?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/rosamexicanoblumenau/',
      },
      {
        nome: 'Pepper Jack',
        endereco: 'Rua Joinville, 148 - Vila Nova, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Pepper+Jack+Restaurante/@-26.907283,-49.0842783,16.5z/data=!4m6!3m5!1s0x94df192ab2980905:0x56b32b77c4e549ba!8m2!3d-26.9080017!4d-49.0825854!16s%2Fg%2F11g_rk9hc?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/pepperjackbnu/',
      },
      {
        nome: 'Funiculi Funicula',
        endereco: 'Rua Hermann Hering, 532, Bom Retiro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Ristorante+Funicul%C3%AC+Funicul%C3%A0/@-26.9229013,-49.844219,9z/data=!4m10!1m2!2m1!1sfuniculo+funicula!3m6!1s0x94df18e85c3179cd:0x775df948e74c8911!8m2!3d-26.9252862!4d-49.0707316!15sChFmdW5pY3VsaSBmdW5pY3VsYVoTIhFmdW5pY3VsaSBmdW5pY3VsYZIBEml0YWxpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11g_2ptfd?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/ristorantefuniculi/',
      },
      {
        nome: 'Brava Sushi',
        endereco: 'Alameda Rio Branco, 403 - Vila Formosa, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Brava+Sushi/@-26.9260607,-49.3495212,11z/data=!4m10!1m2!2m1!1sbrava+sushi!3m6!1s0x94df18934b9df887:0x2526b64f0e579927!8m2!3d-26.9260607!4d-49.0611301!15sCgticmF2YSBzdXNoaSIDiAEBWg0iC2JyYXZhIHN1c2hpkgETamFwYW5lc2VfcmVzdGF1cmFudOABAA!16s%2Fg%2F11cmt5g7fq?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/bravasushi/',
      },
      {
        nome: 'Nonno Nico Restô Bar',
        endereco: 'Rua Antônio da Veiga, 213 - Victor Konder, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Nonno+Nico+Restobar/@-26.9069831,-49.083006,17z/data=!3m1!4b1!4m6!3m5!1s0x94df1f925f65034b:0xd4806117f333ebee!8m2!3d-26.906988!4d-49.0783926!16s%2Fg%2F11grtmprtj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/nicorestobar/',
      },
      {
        nome: 'Norden Bar & Biergarten',
        endereco: 'Rua Xavantina, 100 - Boa Vista, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Norden+Blumenau/@-26.8996433,-49.0801889,17z/data=!3m1!4b1!4m6!3m5!1s0x94df1f708192624b:0x47182bd2bb404747!8m2!3d-26.8996482!4d-49.0755755!16s%2Fg%2F11rd4633mh?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/nordenblumenau/',
      },
    ],
  },
  {
    nome: 'Rota de Fast Food',
    icone: 'material-symbols:fastfood-rounded',
    locais: [
      {
        nome: 'Alemão Batata - Vila Germânica',
        endereco: 'Rua Alberto Stein, 199 - Velha, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Alem%C3%A3o+Batata+Choperia/@-26.91513,-49.0894789,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c2e341fd5f:0xeac64315cdf17fed!8m2!3d-26.9151349!4d-49.0848655!16s%2Fg%2F11bxc5ss0d?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/alemaobatatachoperia/',
      },
      {
        nome: 'Bier Vila',
        endereco: 'Rua Alberto Stein, 199 - Sala 100 - Velha, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+da+Fam%C3%ADlia+Colonial/@-26.9197033,-49.0654369,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c056db1295:0x2369d36a3e2713de!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/biervila/',
      },
     
      {
        nome: 'The Cap Pizzaria',
        endereco: 'Rua Cap. Euclídes de Castro, 43 - Loja B - Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Cap+Pizza/@-26.9204776,-49.0679084,17z/data=!3m1!4b1!4m6!3m5!1s0x94df1984bfaef137:0x2025b21d5ae33a45!8m2!3d-26.9204824!4d-49.0653335!16s%2Fg%2F11kp988q8_?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/cappizzas/',
      },
      {
        nome: 'Aikau Poke',
        endereco: 'Rua Curt Hering, 40 - Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Aikau+Poke/@-26.9217245,-49.0684116,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18ea63385507:0x4456a22a410ff81c!8m2!3d-26.9217294!4d-49.0637982!16s%2Fg%2F11dxkqqt0t?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/aikaupoke/',
      },
      {
        nome: 'Don Peppone',
        endereco: 'Rua 7 de Setembro, 2013 - Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Don+Peppone+Ristorante+e+Pizzeria/@-26.9150625,-49.0764407,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18d08651db8d:0xe2fb5910b0733e1!8m2!3d-26.9150673!4d-49.0738658!16s%2Fg%2F1tcv7gmd?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/donpepponebnu/',
      },
    ],
  },
  {
    nome: 'Rota da Cerveja',
    icone: 'ri:beer-fill',
    locais: [
      {
        nome: 'Stannis Pub',
        endereco: 'Rua Padre Jacobs, 15B - Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Stannis+Pub+-+Blumenau/@-26.9198194,-49.0680824,17z/data=!3m1!4b1!4m6!3m5!1s0x94df195ff055fd87:0x801eecfe186c9539!8m2!3d-26.9198242!4d-49.0655075!16s%2Fg%2F11gy0s5xzt?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/stannispubbnu/'
      },
      {
        nome: 'My Beer Factory & Pub',
        endereco: 'Alameda Rio Branco, 346 - Jardim Blumenau, Blumenau - SC',
        link: 'https://www.google.com/maps/place/My+Beer+Factory+%26+Pub/@-26.925445,-49.0641427,17z/data=!3m1!4b1!4m6!3m5!1s0x94df19343e4818fb:0x3d2bf801732856d3!8m2!3d-26.9254498!4d-49.0615678!16s%2Fg%2F11h_t29zwn?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/mybeeroficial/'
      },
      {
        nome: 'Balbúrdia',
        endereco: 'Rua Antônio da Veiga, 464 - Itoupava Seca, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Balb%C3%BArdia+Blumenau/@-26.9077427,-49.1521569,13z/data=!4m10!1m2!2m1!1sbalburdia!3m6!1s0x94df19ceca48a26d:0xba17998272b755f7!8m2!3d-26.9077427!4d-49.0800591!15sCgliYWxidXJkaWFaCyIJYmFsYnVyZGlhkgEMY29ja3RhaWxfYmFy4AEA!16s%2Fg%2F11hzsn443h?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/balburdia.blumenau/'
      },
      {
        nome: 'Segredos do Malte',
        endereco:
          'Rua Gustavo Zimmermann, 510 - Bloco 01 - Itoupava Central, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Segredos+do+Malte+-+Cervejaria+(F%C3%A1brica)/@-26.9072583,-49.2757724,11z/data=!4m10!1m2!2m1!1sclube+do+malte!3m6!1s0x94df1fff26b0ea6f:0x595d4e3f82095173!8m2!3d-26.8454993!4d-49.0854619!15sCg5jbHViZSBkbyBtYWx0ZVoQIg5jbHViZSBkbyBtYWx0ZZIBB2JyZXdlcnngAQA!16s%2Fg%2F11gtftk151?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/segredosdomaltepub/'
      },
      {
        nome: 'Schornstein',
        endereco: 'Rua Hermann Weege, 160 - Centro, Pomerode - SC',
        link: 'https://www.google.com/maps/place/Armaz%C3%A9m+Schornstein/@-26.744416,-49.4665053,11z/data=!4m10!1m2!2m1!1sSchorstein!3m6!1s0x94dee51ae0923cd5:0x6721ce723094dbc6!8m2!3d-26.7376334!4d-49.1737095!15sCgtTY2hvcm5zdGVpbloNIgtzY2hvcm5zdGVpbpIBCmJlZXJfc3RvcmXgAQA!16s%2Fg%2F11c0xnzlx0?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/schornsteinoficial/'
      },
      {
        nome: 'Bier Vila',
        endereco: 'Rua Alberto Stein, 199 - Sala 100 - Velha, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+da+Fam%C3%ADlia+Colonial/@-26.9197033,-49.0654369,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c056db1295:0x2369d36a3e2713de!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/biervila/'
      },
      {
        nome: 'Alemão Batata - Vila Germânica',
        endereco: 'Rua Alberto Stein, 199 - Velha, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Alem%C3%A3o+Batata+Choperia/@-26.91513,-49.0894789,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c2e341fd5f:0xeac64315cdf17fed!8m2!3d-26.9151349!4d-49.0848655!16s%2Fg%2F11bxc5ss0d?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
        insta: 'https://www.instagram.com/alemaobatatachoperia/'
      },
    ],
  },
]
</script>

<style>
.page-container {
  min-height: 100vh;
  position: relative;
  padding-top: 16px; /* Adiciona espaço no topo */
  margin: 0;
  width: 100%;
}

/* Ajuste para dispositivos móveis */
@media (max-width: 768px) {
  .page-container {
    padding-top: 8px;
  }

  h1.text-4xl {
    font-size: 2.5rem;
    margin-top: 16px;
  }
}

li::before {
  content: '';
  margin-left: 0;
}
</style>
