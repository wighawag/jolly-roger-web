<script>
	import "../global.css";
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Notifications from '$lib/components/notification/Notifications.svelte';
	import NoInstallPrompt from '$lib/components/NoInstallPrompt.svelte';
	import NewVersionNotification from '$lib/components/NewVersionNotification.svelte';
	// import Install from './components/Install.svelte';

	import {onMount} from 'svelte';

	onMount(() => {
		document.body.classList.add('dark:bg-black');
		document.body.classList.add('bg-white');
	});
</script>

<NoInstallPrompt />
<NewVersionNotification />

<NavBar links={[{name: 'index', title: 'Home'}, {name: 'demo', title: 'Demo'}]} />
<slot />
<Notifications />
