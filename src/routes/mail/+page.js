export async function load({fetch}) {
				let body = await (await fetch('/mail')).text();
				// debugger;
				return {body};
}
