export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('input_group', {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': config.labels.input_group,
                tagName: 'div',
                traits: [],
            },
        }, {
            isComponent(el) {
                if(el.tagName === 'DIV') {
                    return {type: 'div'};
                }
            },
        }),
        view: defaultView,
    });
}