<template>
  <div class="page-container">
    <h1 class="text-4xl text-white text-center font-bold mb-12">Turismo</h1>
    <div class="container mx-auto py-12 px-4 mt-12">

      <div class="flex flex-col md:flex-row items-stretch justify-center gap-6 flex-wrap">
        <div 
          v-for="rota in rotas" 
          :key="rota.nome" 
          class="bg-white p-6 rounded-lg shadow-lg border-4 border-amber-300 flex flex-col w-full md:w-[calc(50%-1rem)]"
        >
          <h2 class="text-2xl font-bold text-center mb-4 flex items-center justify-center">
        <Icon :name="rota.icone || 'material-symbols:restaurant'" size="28" class="text-amber-500 mr-2" />
        {{ rota.nome }}
          </h2>
          
        <table class="w-full text-left">
        <tbody>
          <tr v-for="local in rota.locais" :key="local.nome" class="border-b border-gray-200 last:border-0">
          <td class="py-3 align-top">
            <a 
            :href="local.link" 
            target="_blank" 
            class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
            <Icon name="mdi:map-marker" class="mr-1 text-red-500" />
            {{ local.nome }}
            <Icon name="mdi:open-in-new" size="14" class="ml-1" />
            </a>
            <p class="text-gray-600 text-sm ml-6">{{ local.endereco }}</p>
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
    nome: 'Rota Histórica',
    icone: 'i-material-symbols:book-6',
    locais: [
      {
        nome: 'Praça Hercílio Luz - Início da Beira Rio',
        endereco: 'Rua XV de Novembro, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/R.+XV+de+Novembro+-+Centro,+Blumenau+-+SC/@-26.9197033,-49.0654369,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c056db1295:0x2369d36a3e2713de!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Shopping H',
        endereco: 'Rua Curt Hering, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Shopping+H/@-26.9201941,-49.064898,17.25z/data=!4m15!1m8!3m7!1s0x94df18c056db1295:0x2369d36a3e2713de!2sR.+XV+de+Novembro+-+Centro,+Blumenau+-+SC!3b1!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg!3m5!1s0x94df18c1d764aec9:0x117891d444b94781!8m2!3d-26.9207734!4d-49.0642726!16s%2Fg%2F1yfj5km_7?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Catedral, Castelinho da Havan e Teatro Carlos Gomes',
        endereco: 'Rua XV de Novembro, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Catedral+S%C3%A3o+Paulo+Ap%C3%B3stolo/@-26.9201941,-49.064898,17.25z/data=!4m15!1m8!3m7!1s0x94df18c056db1295:0x2369d36a3e2713de!2sR.+XV+de+Novembro+-+Centro,+Blumenau+-+SC!3b1!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg!3m5!1s0x94df18c50f08d7d9:0xe701bb177980fc9c!8m2!3d-26.9196446!4d-49.0661452!16s%2Fg%2F1wf22_wr?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      }, 
      {
        nome: 'Estação Unifique e Prefeitura',
        endereco: 'Rua XV de Novembro, Centro, Blumenau - SC',
        link: 'https://www.google.com.br/maps/place/Prefeitura+Municipal+de+Blumenau/@-26.9110645,-49.0744549,15.22z/data=!4m6!3m5!1s0x94df18c57ff5672f:0x2842e93623984960!8m2!3d-26.9139847!4d-49.0691372!16s%2Fg%2F1tvymyhm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Preça da Paz - Final da Beira Rio',
        endereco: 'Rua Martin Luther, Centro, Blumenau - SC',
        link: 'https://www.google.com.br/maps/place/Pra%C3%A7a+da+Paz/@-26.9130391,-49.0701887,19.22z/data=!4m6!3m5!1s0x94df18cf8783ceef:0xb415987b704fc89e!8m2!3d-26.9132252!4d-49.0695768!16s%2Fg%2F11cjqbqpg_?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Vila Germânica e Parque Ramiro Ruediger',
        endereco: 'Rua Alberto Stein, Velha, Blumenau - SC',
        link: 'https://www.google.com.br/maps/place/P%C3%B3rtico+Tur%C3%ADstico+Vila+Germ%C3%A2nica/@-26.91572,-49.0850669,17.25z/data=!4m14!1m7!3m6!1s0x94df192908926f8b:0x3a5f29a2181bcf8!2sEmp%C3%B3rio+Vila+Germ%C3%A2nica!8m2!3d-26.9153594!4d-49.0844385!16s%2Fg%2F1ptxxfb87!3m5!1s0x94df19296e5eb7df:0x513e86d5d5a15393!8m2!3d-26.9146055!4d-49.0849879!16s%2Fg%2F11c7srfj9b?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      }
    ]
  },
  {
    nome: 'Rota Cultural',
    icone: 'icon-park-outline:museum-one',
    locais: [
      {
        nome: 'Museu de Ecologia Fritz Müller',
        endereco: 'Rua Itajaí, 1418, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+de+Ecologia+Fritz+M%C3%BCller/@-26.9100599,-49.0441859,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18a0dbeae521:0x77729b58a05a6a5d!8m2!3d-26.9100599!4d-49.0441859!16s%2Fg%2F113qbgfdr?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Museu da Cerveja',
        endereco: 'Rua XV de Novembro, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+da+Cerveja+de+Blumenau/@-26.9216204,-49.0613571,17z/data=!3m1!4b1!4m6!3m5!1s0x94df189457001429:0xe14905346d56eebf!8m2!3d-26.9216252!4d-49.0587822!16s%2Fg%2F12qbh5_8v?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Museu da Família Colonial',
        endereco: 'Rua Benjamin Constant, 161, Centro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+da+Fam%C3%ADlia+Colonial/@-26.9197033,-49.0654369,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c056db1295:0x2369d36a3e2713de!8m2!3d-26.9197033!4d-49.0654369!16s%2Fg%2F11b62rn0dg?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Museu Hering',
        endereco: 'Rua Hermann Hering, 1790, Bom Retiro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Museu+Hering/@-26.9254903,-49.0848229,17z/data=!3m1!4b1!4m6!3m5!1s0x94df192088674b91:0x3b1936948f07f266!8m2!3d-26.9254951!4d-49.082248!16s%2Fg%2F1q2wdnmyg?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D' 
        }
      ]
  },
  {
    nome: 'Rota Explorador',
    icone: 'map:climbing',
    locais: [
      {
        nome: 'Parque das Nascentes',
        endereco: 'Rua Santa Maria, 14000, Progresso, Blumenau - SC',
        link: 'https://www.google.com/maps/place/parque+das+nascentes+blumenau/data=!4m2!3m1!1s0x94df184742adbc9f:0xb4dad3a7bb039edb?sa=X&ved=1t:155783&ictx=111'
      },
      {
        nome: 'Parque Sptizkopf',
        endereco: 'Rua Bruno Schereiber, 3777, Progresso, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Parque+Ecol%C3%B3gico+Spitzkopf/@-27.0058439,-49.1135947,17z/data=!3m1!4b1!4m6!3m5!1s0x94df175f6acbc2ed:0x3f62d5a6458dce7!8m2!3d-27.0058487!4d-49.1110198!16s%2Fg%2F1tjrr3hs?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Morro Azul',
        endereco: 'Estrada Geral Mulde Alta, Mulde, Timbó - SC',
        link: 'https://www.google.com/maps/place/Parque+Natural+Municipal+Freymund+Germer+(MORRO+AZUL)/@-26.7638518,-49.213407,17z/data=!3m1!4b1!4m6!3m5!1s0x94defb2da8f1ac73:0x7432183aa1d8f67d!8m2!3d-26.7638566!4d-49.2108321!16s%2Fg%2F11byp6r91y?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      }
    ]
  },
  {
    nome: 'Rota das Compras',
    icone: 'material-symbols:shopping-bag',	
    locais: [
      {
        nome: 'Loja da Fábrica Hering',
        endereco: 'Rua Bruno Hering, 1421, Bom Retiro, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Hering/@-26.9246975,-49.0839706,17z/data=!3m1!4b1!4m6!3m5!1s0x94df19207c82c341:0x7c6e75c4e5ce3c17!8m2!3d-26.9247004!4d-49.0824395!16s%2Fg%2F1wtbw0jh?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Loja da Fábrica Karsten',
        endereco: 'Rua Werner Duwe, 5204 - Testo Salto, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Karsten+-+Cama,+Mesa,+Banho,+Toalhas,+Decora%C3%A7%C3%A3o+em+Blumenau+SC/@-26.8476897,-49.1559985,17z/data=!3m1!4b1!4m6!3m5!1s0x94dee279702fbc2f:0xc4de1445dd979f63!8m2!3d-26.8476945!4d-49.1534236!16s%2Fg%2F1tdxm0cv?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Loja da Fábrica Altenburg',
        endereco: 'BR-470, 6607 - Km 60 - Badenfurt, Blumenau - SC',
        link: 'https://www.google.com/maps/place/Altenburg/@-26.884217,-49.1543681,17z/data=!3m1!4b1!4m6!3m5!1s0x94df1da70eae3a21:0x77b5489b0566346f!8m2!3d-26.8842218!4d-49.1517932!16s%2Fg%2F1ydnqh39b?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Loja da Fábrica Kyly',
        endereco: 'Rodovia SC 418, km 3, 3215 - Centro, Pomerode - SC',
        link: 'https://www.google.com/maps/place/Loja+de+F%C3%A1brica+Kyly/@-26.7647817,-49.3133597,12z/data=!4m10!1m2!2m1!1sloja+fabrica+Kyly!3m6!1s0x94dee48cf45f9069:0xeaeeb93eeb653735!8m2!3d-26.7647817!4d-49.1691641!15sChFsb2phIGZhYnJpY2EgS3lseSIDiAEBWhMiEWxvamEgZmFicmljYSBreWx5kgEYY2hpbGRyZW5zX2Nsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11bc738jdn?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Loja da Fábrica da Porcelana Schmidt',
        endereco: 'Rua Luiz Abry, 849 - Centro, Pomerode - SC',
        link: 'https://www.google.com/maps/place/Loja+Porcelana+Schmidt+-+Pomerode/@-26.76361,-49.5606297,10z/data=!4m10!1m2!2m1!1sloja+fabrica+schimidt!3m6!1s0x94dee512a81c5425:0x7d32ccd01cfdec90!8m2!3d-26.7303933!4d-49.1767841!15sChVsb2phIGZhYnJpY2Egc2NoaW1pZHRaFyIVbG9qYSBmYWJyaWNhIHNjaGltaWR0kgEPY2hpbmF3YXJlX3N0b3JlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF5YVRRMk5IcEJSUkFC4AEA-gEECAAQOA!16s%2Fg%2F11b6j72pc_?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'Loja da Fábrica Oxford',
        endereco: 'Avenida 21 de Janeiro, 3540 - Centro, Pomerode - SC',
        link: 'https://www.google.com/maps/place/Casa+Oxford+-+Pomerode/@-26.7443212,-49.3861848,10.87z/data=!4m10!1m2!2m1!1sloja+fabrica+oxford!3m6!1s0x94dee4e591c15083:0xa3e9d8cbd6ae2321!8m2!3d-26.7549272!4d-49.1755519!15sChNsb2phIGZhYnJpY2Egb3hmb3JkWhUiE2xvamEgZmFicmljYSBveGZvcmSSARRraXRjaGVuX3N1cHBseV9zdG9yZeABAA!16s%2Fg%2F11bw4vvk56?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
      }
    ]
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