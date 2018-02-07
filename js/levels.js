var  levels = [

               //Demo Level
              { trackLayout: [  5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5,
                                5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                5, 10, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 10, 0, 90, 0,11, 0, 0, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 1,
                                1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 10,50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0,51, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 1,
                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                             ],
                rows: 12,
                cols: 20,
                enemyCars: 1,
                timeLimit: 1 * 100 * framesPerSecond

              },

              //Level One
              { trackLayout: [  27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
                                27, 27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23, 27,
                                27, 27,  0,  0,  0,  0, 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  7, 27,
                                27,  0,  0,  0, 27, 27, 27, 27, 27, 27,  6, 27, 27, 27, 27, 27,  0 , 0,  0, 27,
                                27,  0,  0,  0, 27, 27,  6,  6,  6,  6, 27, 27,  0,  0,  0, 27,  0,  0,  0, 27,
                                27,  0,  0,  0, 27, 27, 27, 27, 27,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27,
                                27,  0,  0,  0, 27,  0,  0, 27, 27,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27,
                                27,  0,  0,  0, 27,  0,  0, 27, 27,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27,
                                27,  0,  0, 27, 27,  0,  0, 27,  0,  0,  0, 27,  0,  0,  0,  4,  0,  0,  0, 27,
                                27,  2,  0, 27,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0,  8,  0,  0,  0, 27,
                                27, 27, 27, 27,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0,  8,  0,  0,  0, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0,  8,  0,  0,  0, 27,
                                27,  0,  0,  0,  0,  0, 27,  6,  6, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
                                27,  0, 50,  0, 27, 27, 27, 27, 27, 26, 27, 26, 27, 26, 27, 27, 27, 27, 27,  5,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  8, 27,  6,  6,  5,  5,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0, 11,  0,  0,  0,  8,  0, 27,  6,  6,  5,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  8,  0,  0, 27,  6,  6,
                                27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,  0,  0,  8,  0,  0,  0, 27,  6,
                                27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,  4,  0,  0,  0, 27, 27,
                                27,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0, 27,  0, 11,  0, 27, 27,
                                27,  0,  0,  0, 27,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27, 27,
                                27,  0,  0,  0, 27, 27,  0,  0,  0,  0,  0,  0,  0,  0, 27,  0,  0,  0, 27, 27,
                                27,  0,  0,  0, 27, 27, 27, 27, 27, 27, 27,  0,  0,  0,  0,  0,  0,  0, 27, 27,
                                27,  0,  51, 0,  0,  0,  0,  0,  0,  8, 27,  0,  0,  0,  0,  0,  0,  0, 27, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  8, 27,  0,  0,  0,  0,  0,  0,  0, 27, 27,
                                27,  0,  0,  0,  0,  0,  0,  0,  0,  8, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
                                27, 27, 27, 27, 27, 27, 27,  0,  0,  8,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27, 28, 28,  6,  6,  6,  6, 27,  0,  8,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27, 28, 28, 28, 28, 27, 27, 27, 27,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27, 28, 28, 28, 28,  3,  6, 27, 27, 27, 27, 27, 27, 27, 27, 27,  0, 50,  0, 27,
                                27, 28, 28, 28, 28,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27, 28, 28, 28, 28,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27,
                                27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
                                 ],
                rows: 36,
                cols: 20,
                enemyCars: 1,
                timeLimit: 1 * 50 * framesPerSecond
              },

            ]
