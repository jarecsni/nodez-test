<script lang="typescript">
    import {hello} from '@jarecsni/nodez';
    console.log(hello());

    import {Dyna} from '$lib/Dyna';
    import type {Plugin} from '$lib/plugins/Plugin';

    const dyna = new Dyna();
    // const m = dyna.loadPlugin('PluginOne').then(module => {
    //     //(module as Plugin).execute(); 
    //     dyna.execute('PluginOne');   
    // })

    // async function load(): Promise<Plugin> {
    //     return await dyna.loadPlugin('PluginOne');
    // }
    // load();
    dyna.execute('PluginOne');
</script>
<h1>Welcome to SvelteKit: {hello()}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
