function zoosPage() {
    let pets = {
        panda: {
            text: {
                place: 'The Beijing Zoo',
                population: 'About 1,590 individuals',
                habitat: 'Temperate forests high in the mountains of southwest China',
                diet: 'A panda`s daily diet consists almost entirely of the leaves, stems and shoots of various bamboo species. Bamboo contains very little nutritional value so pandas must eat 12-38kg every day to meet their energy needs.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/OObOQ2GElhA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQuMJPmXMjmBbYtXIoapXYTQ9OxA',
                    id: 'OObOQ2GElhA'
                },
                {
                    src: 'https://i.ytimg.com/vi/MIA8AKVZ0Yk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8F2qwmxZLRk_lKZDqSS4Jupq-9w',
                    id: 'MIA8AKVZ0Yk'
                },
                {
                    src: 'https://i.ytimg.com/vi/l73rmrLTHQc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtjnA6I-Eudf4u2Si_LeOWMTEu8Q',
                    id: 'l73rmrLTHQc'
                }
            ],
        },
        eagle: {
            text: {
                place: 'Southwest Florida Zoo',
                population: 'More than 270 pairs in 2022',
                habitat: 'Typically nest in forested areas adjacent to large bodies of water',
                diet: 'Main live prey consists of medium sized mammals and birds such as rabbits, hares, grouse and ptarmigan. The diet of coastal birds includes gulls and other seabirds.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/eKrFdkcXIaM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi-mtyLa82--bbsx6duugUH0-4_w',
                    id: 'eKrFdkcXIaM'
                },
                {
                    src: 'https://i.ytimg.com/vi/ZG-rlFcd1Ew/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgKYzMb23-flCvXFCCoo4bTUgtrg',
                    id: 'ZG-rlFcd1Ew'
                },
                {
                    src: 'https://i.ytimg.com/vi/X0sG1IvapVs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn5PeXel1I8J7jugkB2mRTsg8r-g',
                    id: 'X0sG1IvapVs'
                }
            ],
        },
        monkey: {
            text: {
                place: 'Higashiyama Zoo',
                population: 'Over 100,000 western lowland gorillas',
                habitat: 'Gorillas primarily inhabit tropical forest habitats.Tropical forests are characterized as having little variance in temperature (around 23°C) and length of daylight (around 12 hours).',
                diet: 'Gorillas stick to a mainly vegetarian diet, feeding on stems, bamboo shoots and fruits. Western lowland gorillas, however, also have an appetite for termites and ants, and break open termite nests to eat the larvae.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/rgXWDk7rh4w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsYYqx3xvA5AtmvSjIzD-Y10BxTg',
                    id: 'rgXWDk7rh4w'
                },
                {
                    src: 'https://i.ytimg.com/vi/672cUSe69J0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFC3oM-hjmNoYCGWf8wLCRMlOyZA',
                    id: '672cUSe69J0'
                },
                {
                    src: 'https://i.ytimg.com/vi/PbMbtQ9hgEY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJJIP9BD9VVexOPvk6cIc8HniS0g',
                    id: 'PbMbtQ9hgEY'
                }
            ],
        },
        croco: {
            text: {
                place: 'Australia Zoo',
                population: 'Roughly 1.25 million',
                habitat: 'Alligators can be found in slow-moving rivers, ponds, lakes and swamps. ',
                diet: 'Their diets include prey species that are abundant and easily accessible. Juvenile alligators eat primarily insects, amphibians, small fish, and other invertebrates. Adult alligators eat rough fish, snakes, turtles, small mammals, and birds.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/gb99Y3cjw1c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcwLSAAStNG4ymjG2wzVcbuM1ixg',
                    id: 'gb99Y3cjw1c'
                },
                {
                    src: 'https://i.ytimg.com/vi/j_BckhLECVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEzn8tB7z7oNjXFOxSXSgzdpvkjw',
                    id: 'j_BckhLECVY'
                },
                {
                    src: 'https://i.ytimg.com/vi/VppSDEkTEDw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtFMivgNjpIHGdxePl0f8iPzMOzQ',
                    id: 'VppSDEkTEDw'
                }
            ],
        },
        fox: {
            text: {
                place: 'Miyagi Zao, Shiroishi',
                population: 'About 9,500 individuals',
                habitat: 'Usually live in forested areas, though they are also found in mountains, grasslands and deserts. They make their homes by digging burrows in the ground. These burrows, also called dens, provide a cool area to sleep, a good location to store food and a safe place to have their pups. ',
                diet: 'Foxes are omnivores. This means that they eat meat and vegetation. A fox`s diet can consist of small animals, such as lizards, voles, rats, mice, rabbits and hares. They round out their diet with birds, fruits and bugs, according to the Smithsonian. Foxes that live near the ocean eat fish and crabs, as well. If they have trouble finding food, a fox will have no problem raiding trash cans to find scraps.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/nrSdiqp0Dpk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtEgaCPC_NV1VQDXI_tS_9VKspdw',
                    id: 'nrSdiqp0Dpk'
                },
                {
                    src: 'https://i.ytimg.com/vi/uIR_vSRASxM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8bOeOPdPx78DYM7Q-F3zgqUJYdw',
                    id: 'uIR_vSRASxM'
                },
                {
                    src: 'https://i.ytimg.com/vi/92wtDKCtOiU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzKsJ9ZrbTCGSzEkQiAzTIFf0eAA',
                    id: '92wtDKCtOiU'
                }
            ],
        },
        sloth: {
            text: {
                place: 'Toucan Rescue Ranch',
                population: 'About 7,600 individuals',
                habitat: 'Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.',
                diet: 'Sloths munch on leaves, twigs and buds. Because the animals don`t have incisors, they trim down leaves by smacking their firm lips together. A low metabolic rate means sloths can survive on relatively little food; it takes days for them to process what other animals can digest in a matter of hours.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/kQseWZfEuak/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRRIxqkqShIdPZ34szN4ZOc-SLQw',
                    id: 'kQseWZfEuak'
                },
                {
                    src: 'https://i.ytimg.com/vi/Xe91bOZ_ZsU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdxM6P1lkq3Cenph6FxaxWe0Jd6A',
                    id: 'Xe91bOZ_ZsU'
                },
                {
                    src: 'https://i.ytimg.com/vi/DpV4k3Edr-I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASPE_WyvnlG8zBcMZP-yll2ULy_A',
                    id: 'DpV4k3Edr-I'
                }
            ],
        },
        elephant: {
            text: {
                place: 'African Tembe Elephant Park',
                population: 'About 760 individuals',
                habitat: 'They are found most often in savannas, grasslands, and forests but occupy a wide range of habitats, including deserts, swamps, and highlands in tropical and subtropical regions of Africa and Asia.',
                diet: 'Elephants are big vegetarians. In the wild, they eat a wide variety of plants, from savannah grasses, shrubs, and herbs, to woody trees, bark, and fruits.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/48MFrf5ADp8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlfOIn7iVA9l3q1JuxpxxSCszXmg',
                    id: '48MFrf5ADp8'
                },
                {
                    src: 'https://i.ytimg.com/vi/ydYDqZQpim8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALsSz_Rr5FzRwUuB0Qq7Q6GlFZVQ',
                    id: 'ydYDqZQpim8'
                },
                {
                    src: 'https://i.ytimg.com/vi/ZGcBDLMBHjI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-BSgyhotzlf7L6bhYgdwngHigA',
                    id: 'ZGcBDLMBHjI'
                }
            ],
        },
        leopard: {
            text: {
                place: 'Mystery Forest',
                population: 'About 75 individuals',
                habitat: 'It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia.',
                diet: 'While the carnivore`s preferred food sources are ungulates like antelope, gazelles, and impalas, they feed on many animals that might surprise us. Baboons, hares, rodents, birds, lizards, porcupines, warthogs, fish, and dung beetles are all part of the leopard`s extensive menu.',
            },
            slides: [
                {
                    src: 'https://i.ytimg.com/vi/4wb6o3QvrxY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz7giLncZgKEQAa-DpJFp5M8sF6g',
                    id: '4wb6o3QvrxY'
                },
                {
                    src: 'https://i.ytimg.com/vi/JTlveCrymV8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiSoIOymgizQxVOntAjr-nDAvbVg',
                    id: 'JTlveCrymV8'
                },
                {
                    src: 'https://i.ytimg.com/vi/gcDWT-mTCOI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpmBTmalT8Bx4RPipUZ2NbEBHXTw',
                    id: 'gcDWT-mTCOI'
                }
            ],
        },
    };

    window.addEventListener('hashchange', () => {
        if (location.hash.slice(1) in pets) {
            location.reload();
        }
    })
    if (location.pathname.includes("/zoos.html")) {
        if (location.hash === '') {
            location.hash = '#panda';
        }
    }

    function createCard(pets) {
        let hash = location.hash.slice(1)

        let currentPet = pets[hash];
        if (currentPet.text) {
            for (let position in currentPet.text) {
                document.querySelector(`.zoos__${position}`).textContent = currentPet.text[position];
            }
        }
        if (currentPet.slides) {
            document.querySelectorAll('.zoos__cameras .swiper-slide:not(.swiper-slide-duplicate)').forEach((slide,index) => {
                let img = slide.querySelector('img');
                img.setAttribute('src', currentPet.slides[index].src);
                img.setAttribute('data-videoId', currentPet.slides[index].id);
            })
        }

    }

    createCard(pets);


    const camerasSlider = new Swiper('.zoos__cameras', {
        slidesPerView: 2,
        spaceBetween: 12,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        breakpoints: {
            530: {
                slidesPerView: 3,
                spaceBetween: 26
            }
        }
    });
}

export default zoosPage;