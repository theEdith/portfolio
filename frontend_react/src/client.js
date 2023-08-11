import sanityClient, { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'xrmvio0n',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'sklysBMI7SoBEIMWiOI1YW4CJnK3vtNSFapxydvNcRMduwYILLj519SZaTNP1d0987BHXUh84PVBk2nusKMBpUaSgjAwUaIOuyGIAffYDRHPYRJv3ageTTZu8G07E0nmahZAb1HllC2ChTqylQeWgwOoTa8n8hVnCFNdjDLt3Q7LVIedFmnP',

});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);