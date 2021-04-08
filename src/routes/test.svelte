<script lang="ts">
  import {Wallet} from '@ethersproject/wallet';
  import {onMount} from 'svelte';
  import aes from 'aes-js';
  import {base64, compressToUint8Array, decompressFromUint8Array} from '$lib/utils';

  let encryptedForWire;
  let decrypted;

  async function test() {
    const privateWallet = Wallet.createRandom();
    const aesKeySignature = await privateWallet.signMessage('AES KEY');
    const aesKey = aes.utils.hex.toBytes(aesKeySignature.slice(2, 66)); // TODO mix ?

    const textBytes = compressToUint8Array('hello world'); // const textBytes = aes.utils.utf8.toBytes(data);
    const ctr = new aes.ModeOfOperation.ctr(aesKey, undefined);
    const encryptedBytes = ctr.encrypt(textBytes);
    encryptedForWire = base64.bytesToBase64(encryptedBytes);

    const ctr2 = new aes.ModeOfOperation.ctr(aesKey, undefined);
    const decryptedBytes = ctr2.decrypt(encryptedBytes);
    decrypted = decompressFromUint8Array(decryptedBytes) || ''; // return aes.utils.utf8.fromBytes(decryptedBytes);
  }

  onMount(() => {
    test();
  });
</script>

{encryptedForWire}
<br />
{decrypted}
