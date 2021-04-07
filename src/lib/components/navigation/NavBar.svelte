<script lang="ts">
  type LinkInfo = {href: string; title: string};
  export let links: LinkInfo[];
  import NavLink from './NavLink.svelte';
  import {base} from '$app/paths';
  import {page} from '$app/stores';
</script>


<ul class="flex m-1 border-b border-pink-600">
  {#each links as link}
    <NavLink href={link.href} active={base + (link.href.replace(/^\/+|\/+$/g, '')) === ($page.path.replace(/^\/+|\/+$/g, ''))}>
      {link.title}
    </NavLink>
  {/each}
</ul>
