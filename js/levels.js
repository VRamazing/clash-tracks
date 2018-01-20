var  levels = [

               //Demo Level
              { trackLayout: [  5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5,
                                5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                5, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                             ],
                rows: 12,
                cols: 20,
                enemyCars: 1,
                timeLimit: 1 * 100 * framesPerSecond

              },

              //Level One
              { trackLayout: [  23, 23, 22, 21, 23, 25, 25, 23, 22, 22, 25, 23, 25, 23, 22, 25, 23, 22, 22, 23,
                                24, 23, 28,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 28, 23,
                                20, 28,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,
                                28,  0,  0,  0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0,  7, 23,
                                27,  0,  0, 23, 23,  6,  6,  6,  6,  6,  6, 23, 23, 23, 23, 23, 23,  0,  0, 23,
                                26,  0,  0, 23, 23, 23, 20, 23, 23, 21, 23, 23,  0,  0,  0,  0, 23,  0,  0, 23,
                                25,  0,  0, 21, 21, 21, 21, 21, 21, 21, 21,  0,  0,  0,  0,  0, 23,  0,  0, 23,
                                24,  0,  0, 23,  0,  0,  0,  0,  0, 21, 23,  0,  0,  4,  0,  0, 23,  0,  0, 23,
                                23,  0,  0, 23,  0,  0,  0,  0,  0,  0, 23,  0,  0, 23,  0,  0, 23,  0,  0, 23,
                                22,  0,  0, 23,  0,  0,  4,  0,  0,  0,  4,  0,  0, 23,  0,  0, 23,  0,  0, 23,
                                21, 2,  0,  23,  0,  0, 23, 23,  0,  0,  0,  0,  0, 23,  0,  0,  4,  0,  0, 23,
                                20, 23, 23, 23,  0,  0, 23, 23,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0,  0, 23,
                                23,  0,  0,  0,  0,  0, 23,  6, 23,  0,  0,  0, 23, 23,  0,  0,  0,  0,  0, 23,
                                23,  7,  0,  0,  0,  0, 23,  6,  6, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                                23,  0,  0, 23, 21, 21, 23, 23, 25, 22, 22, 23, 25, 25, 23, 23, 23, 23, 23,  5,
                                23,  0,  0,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,  6,  6,  5,  5,
                                23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,  6,  6,  5,
                                23,  0,  0,  0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0,  0, 23,  6,  6,
                                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  4,  0,  0,  0, 21,  6,
                                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  4,  0,  0, 23, 23,
                                23,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0,  0, 23, 23,  0,  0, 23, 23,
                                23,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0,  0, 23, 23,  0,  0, 23, 23,
                                23,  0,  0,  4, 23,  4,  0,  0, 23,  0,  0,  4,  0,  0, 23, 23,  0,  0, 23, 23,
                                23,  0,  0, 23,  6, 23,  0,  0,  4,  0,  0, 23,  0,  0, 23, 23,  0,  0, 23, 23,
                                23,  0,  0, 23,  6, 23,  0,  0,  0,  0,  0, 23,  0,  0, 23, 23,  0,  0, 23, 23,
                                23,  0,  0, 23,  6,  6, 23,  0,  0,  0,  0, 23,  0,  0,  4,  0,  0, 23, 23, 23,
                                23,  0,  0, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0,  0,  0,  0, 23, 23, 23,
                                23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0,  4, 23, 23, 23,
                                23,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0, 23, 23, 23, 23,
                                23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                                23,  6,  6,  6,  6,  6,  6, 23, 23,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23, 23,
                                23,  6,  6,  6,  6,  6,  6, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0, 23,
                                23,  0,  0,  0,  0,  3,  6, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0, 23,
                                23,  0,  5,  5,  5,  6,  6, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  0,  0, 23,
                                23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23, 23,
                                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                                 ],
                rows: 36,
                cols: 20,
                enemyCars: 2,
                timeLimit: 1 * 50 * framesPerSecond
              },

            ]




        