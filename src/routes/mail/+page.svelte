<script>
let {data} = $props()
/** @type HTMLIFrameElement | null */
let iframe = $state(null)

$effect(() => {
				if (!iframe || !iframe?.contentDocument) return
				iframe.contentDocument.body.outerHTML = data.body
				console.log(iframe.contentDocument.innerHTML)
})
// let rendered = $state(si({template: Email}));
</script>

<iframe title="layout" bind:this={iframe}></iframe>

<style>
iframe {
				position: absolute;
				left: 5vw;
				min-height: 80vh;
				min-width: 90vw;
}
</style>
