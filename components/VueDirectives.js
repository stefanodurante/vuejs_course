Vue.component('vue-directives', {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-text="text"></p>
                    <a :href="link.href" v-text="link.text" :title="link.title"></a>
                    <DirectiveHtml/>
                    <DirectiveShow/>
                    <DirectiveIf/>
                    <DirectiveFor/>
                    <DirectiveOn/>
                    <DirectiveModel/>
                    <DirectiveSlot/>
                    <DirectivePre/>
                </div>`,
    data() {
        return {
            title: 'Directivas de Vue.js',
            text: 'texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'The Progressive JavaScript Framework'
            }
        }
    },
    components: {
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectivePre,
    }
});