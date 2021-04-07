<script>
  import '../global.css';
  import NavBar from '$lib/components/navigation/NavBar.svelte';
  import Notifications from '$lib/components/notification/Notifications.svelte';
  import NoInstallPrompt from '$lib/components/NoInstallPrompt.svelte';
  import NewVersionNotification from '$lib/components/NewVersionNotification.svelte';
  // import Install from './components/Install.svelte';
</script>

<NoInstallPrompt />
<NewVersionNotification />

<NavBar
  links={[
    {href: '/', title: 'Home'},
    {href: 'demo/', title: 'Demo'},
  ]}
/>
<slot />
<Notifications />
