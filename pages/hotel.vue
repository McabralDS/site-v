<template>
    <div class="flex flex-col items-center space-y-4">

        <h1 class="text-4xl text-white underline">Hotelaria</h1>
        
        <table class="table-auto">
            <thead class="bg-white border">	
            <tr>
                <th class="px-4 py-2">Nome</th>
                <th class="px-4 py-2">Distancia</th>
                <th class="px-4 py-2">Preço</th>
                <th class="px-4 py-2">Estrelas</th>
            </tr>
            </thead>
            <tbody class=" text-center">
            <tr v-for="hotel in hoteis" :key="hotel.nome" :class="{'row-destaque': hotel.destaque}">
                <td class="border px-4 py-2 ">
                    <a class="hover:underline" :href="hotel.link" target="_blank">{{ hotel.nome }}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414m5.656-5.656a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414" />
                        </svg>
                    </a>
                </td>
                <td class="border px-4 py-2">{{ hotel.distancia }}
                    
                </td>
                <td class="border px-4 py-2">R$ {{ hotel.preco }}</td>
                <td class="border px-4 py-2 text-center">
                <span v-for="n in hotel.estrelas" :key="n" class="text-yellow-500">★</span>
                </td>
            </tr>
            </tbody>
            <tfoot>
                <tr class="border px-4 py-2 text-center">
                    <td colspan="5">
                        <ul>
                            <li>
                                <strong>Preços estimados em quartos para casais ou triplos</strong>
                            </li>
                            <li>
                                <strong>Com café da Manhã incluso</strong>
                            </li>
                            <li>
                                <strong>Avaliação conforme padrão Katherine de Qualidade</strong>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tfoot>
        </table>

        <Button @click="voltar" class="mt-4 px-4 py-2 bg-purple-400 text-white rounded">Voltar</Button>
    </div>
        

</template>

<style>
.row-destaque {
    background-color: #6ed4ee;
    color: #000!important;
}


</style>

<script setup lang="ts">
    
    const hoteis = [
    {
            nome: 'Presto',
            distancia: '5 Km',
            preco: '339,00',
            estrelas: 3,
            destaque: true,
            link: 'https://www.booking.com/hotel/br/presto.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&all_sr_blocks=57233007_405538373_3_1_0_655868&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=13&highlighted_blocks=57233007_405538373_3_1_0_655868&hpos=13&matching_block_id=57233007_405538373_3_1_0_655868&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=57233007_405538373_3_1_0_655868_38985&srepoch=1741046302&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
        {
            nome: 'Caiuá',
            distancia: '13 Km',
            preco: '519,00',
            estrelas: 3,
            link: 'https://www.booking.com/hotel/br/caiua-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&all_sr_blocks=1070486301_379560829_3_41_0&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=6&highlighted_blocks=1070486301_379560829_3_41_0&hpos=6&matching_block_id=1070486301_379560829_3_41_0&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1070486301_379560829_3_41_0__38850&srepoch=1741046378&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
        {
            nome: 'Glória',
            distancia: '14 Km',
            preco: '398,00',
            estrelas: 3,
            link: 'https://www.booking.com/hotel/br/gloria-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&all_sr_blocks=55037105_408199339_0_9_0_538901&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=3&highlighted_blocks=55037105_408199339_0_9_0_538901&hpos=3&matching_block_id=55037105_408199339_0_9_0_538901&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=55037105_408199339_0_9_0_538901_39795&srepoch=1741046406&srpvid=1186a888e3d30018&type=total&ucfs=1& ' 
        },
     
        {
            nome: 'Ibis Budget',
            distancia: '12 Km',
            preco: '351,00',
            estrelas: 3,
            link: 'https://www.booking.com/hotel/br/ibis-budget-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&all_sr_blocks=224225105_377053549_3_1_0&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=4&highlighted_blocks=224225105_377053549_3_1_0&hpos=4&matching_block_id=224225105_377053549_3_1_0&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=224225105_377053549_3_1_0__35100&srepoch=1741046428&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
        {
            nome: 'Plaza',
            distancia: '14 Km',
            preco: '676,00',
            estrelas: 3,
            link: 'https://www.booking.com/hotel/br/plaza-blumenau.pt-br.html?aid=1726433&label=hotel-15935-br-&sid=21009abd8172028106b5113b94f42fdc&age=0&all_sr_blocks=1593511_237339314_0_2_0%2C1593511_237339314_0_2_0&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=1&hapos=1&highlighted_blocks=1593511_237339314_0_2_0%2C1593511_237339314_0_2_0&hpos=1&matching_block_id=1593511_237339314_0_2_0&no_rooms=1&req_adults=3&req_age=0&req_children=1&room1=A%2CA%2CA%2C0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1593511_237339314_0_2_0__38325%2C1593511_237339314_0_2_0__38325&srepoch=1741046590&srpvid=3a59005dfe6e0173&type=total&ucfs=1&'
        },
        {
            nome: 'Slaviero',
            distancia: '13 Km',
            preco: '430,00',
            estrelas: 3,
            link: 'https://www.booking.com/hotel/br/zandona-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&age=0&all_sr_blocks=537771904_264133547_3_41_0_603326&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=7&highlighted_blocks=537771904_264133547_3_41_0_603326&hpos=7&matching_block_id=537771904_264133547_3_41_0_603326&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=537771904_264133547_3_41_0_603326_42900&srepoch=1741046545&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
        {
            nome: 'Himmelblau',
            distancia: '14 Km',
            preco: '414,00',
            estrelas: 2,
            link: 'https://www.booking.com/hotel/br/himmelblau-palace.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&age=0&all_sr_blocks=39095705_344412952_0_9_0&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=2&highlighted_blocks=39095705_344412952_0_9_0&hpos=2&matching_block_id=39095705_344412952_0_9_0&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=39095705_344412952_0_9_0__41400&srepoch=1741046503&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
        {
            nome: 'Hotel 10',
            distancia: '4 Km',
            preco: '509,00',
            estrelas: 2,
            link: 'https://www.booking.com/hotel/br/10-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&age=0&all_sr_blocks=132380308_407701431_4_1_0_685106&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=1&highlighted_blocks=132380308_407701431_4_1_0_685106&hpos=1&matching_block_id=132380308_407701431_4_1_0_685106&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=132380308_407701431_4_1_0_685106_50900&srepoch=1741046522&srpvid=1186a888e3d30018&type=total&ucfs=1&'
        },
       
        {
            nome: 'Zandoná',
            distancia: '4 Km',
            preco: '509,00',
            estrelas: 1,
            link: 'https://www.booking.com/hotel/br/zandona-blumenau.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQKIAgGoAgO4AomEmb4GwAIB0gIkMjIyNjNkYmItNzFjYy00MmYzLTk5YWItZTk5YWI1N2FiMTA32AIF4AIB&sid=d68b19549396974a157cb2201903d150&age=0&all_sr_blocks=537771904_264133547_3_41_0_603326&checkin=2025-03-22&checkout=2025-03-23&dest_id=-629420&dest_type=city&dist=0&group_adults=3&group_children=0&hapos=7&highlighted_blocks=537771904_264133547_3_41_0_603326&hpos=7&matching_block_id=537771904_264133547_3_41_0_603326&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=537771904_264133547_3_41_0_603326_42900&srepoch=1741046545&srpvid=1186a888e3d30018&type=total&ucfs=1& '
        },
    ]

    const voltar = () => {
        navigateTo('/');
    }

</script>