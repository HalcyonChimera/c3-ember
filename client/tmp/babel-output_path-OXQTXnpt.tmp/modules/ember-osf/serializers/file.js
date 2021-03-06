import OsfSerializer from './osf-serializer';

export default OsfSerializer.extend({

    /*
     * `checkout` is included on the `file` payload as a relationship to a user,
     * but when checking a file in/out, the API expects a `checkout` attribute
     * containing only the user ID.
     *
     * This override lets us always treat `checkout` as a string attribute.
     */
    normalize: function normalize(modelClass, resourceHash) {
        var checkoutRel = resourceHash.relationships.checkout;
        if (checkoutRel) {
            var id = checkoutRel.links.related.meta.id;
            resourceHash.attributes.checkout = id;
            delete resourceHash.relationships.checkout;
        }
        return this._super(modelClass, resourceHash);
    }
});