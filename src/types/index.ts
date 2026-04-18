/** 
    Archivo utilizando la dependencia de ZOD
    Un schema para filtrar los datos obtenidos por el JSON
    tener la información en el editor y asignar de forma correcta el tipo de datos 
    utilizar los metodos correctos para cada tipo de dato
   
*/

import { z } from 'zod'

// -------------------------------------------------------------------------------------------------------
// Schema para las imágenes
// -------------------------------------------------------------------------------------------------------
const imageSchema = z.object({
    url:    z.string(),
    width:  z.number(),
    height: z.number()
})


const featuredImagesSchema = z.object({
    thumbnail       : imageSchema,
    medium          : imageSchema,
    medium_large    : imageSchema,
    large           : imageSchema,
    full            : imageSchema
})

// -------------------------------------------------------------------------------------------------------
// Schema para las páginas base
// -------------------------------------------------------------------------------------------------------

export const BaseWPSchema = z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
        rendered: z.string()
    }),
    content: z.object({
        rendered: z.string()
    }),
    featured_images: featuredImagesSchema,
    acf: z.object({
      subtitle: z.string()  
    }),
    
})

// -------------------------------------------------------------------------------------------------------
// Schema para galeria
// -------------------------------------------------------------------------------------------------------
const gallerySchema = z.object({
  large: imageSchema,
  full: imageSchema,
 
})

export const GalleryPageSchema = BaseWPSchema.extend({
  gallery: z.array(gallerySchema)
})


// -------------------------------------------------------------------------------------------------------
// Schema para la págna de proceso.astro
// -------------------------------------------------------------------------------------------------------
const processSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string()
})

export const ProcessPageSchema = BaseWPSchema.extend({
    acf: z.object({
        subtitle: z.string()
    }).catchall(processSchema)
})


// -------------------------------------------------------------------------------------------------------
// Schema para las categorías
// -------------------------------------------------------------------------------------------------------
export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string()
})

export const CategoriesSlugSchema = z.array(CategorySchema.pick({
    slug: true
}))


const CategoriesSchema = z.array(CategorySchema)


// -------------------------------------------------------------------------------------------------------
// Schema para los post de Blog
// -------------------------------------------------------------------------------------------------------
export const PostSchema = BaseWPSchema.omit({
        acf: true
}).extend({
    date: z.string(),
    category_details: CategoriesSchema
})


// -------------------------------------------------------------------------------------------------------
// Schema para los productos
// -------------------------------------------------------------------------------------------------------

const MenuItemSchema = BaseWPSchema.pick({
    title: true,
    featured_images: true,
}).extend({
    acf: z.object({
        description: z.string(),
        price: z.coerce.number(),
    })
})

export const MenuItemsSchema = z.array(MenuItemSchema)

// -------------------------------------------------------------------------------------------------------
// Schema para la página de contacto (Mapa)
// -------------------------------------------------------------------------------------------------------
const MarkerSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  label: z.string(),
})

const LocationSchema = z.object({
  zoom: z.number(),
  lat: z.number(),
  lng: z.number(),
  markers: z.array(MarkerSchema),
})

export const ContactPageSchema = BaseWPSchema.extend({
  acf: z.object({
    subtitle: z.string(),
  }).catchall(LocationSchema)
})

// -------------------------------------------------------------------------------------------------------
// Se añade este Schema para convertir un array de Objetos, por que así se obtiene de la consulta a la API de Wordpress
// -------------------------------------------------------------------------------------------------------
export const PostsSchema = z.array(PostSchema)

export type Post = z.infer<typeof PostSchema>

export type Gallery = z.infer<typeof gallerySchema>

export type FeaturedImages = z.infer<typeof featuredImagesSchema>

export type Location = z.infer<typeof LocationSchema>