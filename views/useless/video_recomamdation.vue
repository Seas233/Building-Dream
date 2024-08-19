<script setup>
</script>

<template>
    <div style="height: 70px;"></div>
    <div style="height: 100px;"></div>

    <div id="video_2">视频推荐
        <div id="video_2_1"></div>
    </div>

    <div style="height: 100px;"></div>

    <div id="video_3">
        <div>
            <div style="height: 10vw;"></div>
            <div class="video_3_1" id="video_3_1_1">
                <div class="video_3_1_">
                    <div>我的故事</div>
                </div>
            </div>
            <div style="height: 10px;"></div>
            <div class="video_3_1" id="video_3_1_2">
                <div class="video_3_1_">
                    <div>书中自有黄金屋</div>
                </div>
            </div>
        </div>
        <div></div>
        <div>
            <div class="video_3_1" id="video_3_1_3">
                <div class="video_3_1_">
                    <div>我和他们</div>
                </div>
            </div>
            <div style="height: 10px;"></div>
            <div class="video_3_1" id="video_3_1_4">
                <div class="video_3_1_">
                    <div>我爱学习</div>
                </div>
            </div>
        </div>
        <div></div>
        <div>
            <div style="height: 10vw;"></div>
            <div class="video_3_1" id="video_3_1_5">
                <div class="video_3_1_">
                    <div>他们俩</div>
                </div>
            </div>
            <div style="height: 10px;"></div>
            <div class="video_3_1" id="video_3_1_6">
                <div class="video_3_1_">
                    <div>知识超人</div>
                </div>
            </div>
        </div>
        <div></div>
        <div>
            <div class="video_3_1" id="video_3_1_7">
                <div class="video_3_1_">
                    <div>青少年成长</div>
                </div>
            </div>
            <div style="height: 10px;"></div>
            <div class="video_3_1" id="video_3_1_8">
                <div class="video_3_1_">
                    <div>趣味课堂</div>
                </div>
            </div>
        </div>
        <div></div>
        <div>
            <div style="height: 10vw;"></div>
            <div class="video_3_1" id="video_3_1_9">
                <div class="video_3_1_">
                    <div>大山里的红领巾</div>
                </div>
            </div>
            <div style="height: 10px;"></div>
            <div class="video_3_1" id="video_3_1_10">
                <div class="video_3_1_">
                    <div>魔法车</div>
                </div>
            </div>
        </div>
    </div>

    <div style="height: 100px;"></div>
</template>

<style scoped>
#video_2{
    color: rgba(130, 213, 38, 1);
    /*font-family: Inter;*/
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: visible;
}

#video_2_1{
    background-image: url("/underline_1.png");
    background-size: contain;
    width: 154.63px;
    height: 40px;
    position: absolute;
    top: 45px;
    z-index: 100;
}

#video_3{
    display: grid;
    grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
    width: 100%;
}

.video_3_1{
    width: 100%;
    height: 28vw;
    background-size: contain;

    background-size:cover;
    background-position: center;

    border-radius: 2vw;
    overflow: hidden;

    display: flex;
    
    flex-direction: column-reverse;
}

#video_3_1_1{
    background-image: url("/video recommendation/p1.jpg");
}

#video_3_1_1>*{
    background-image: linear-gradient(rgba(81, 154, 210,0),#030200);
}

#video_3_1_2{
    background-image: url("/video recommendation/p2.jpg");
}

#video_3_1_2>*{
    background-image: linear-gradient(rgba(224, 210, 183, 0),#483D2F);
}

#video_3_1_3{
    background-image: url("/video recommendation/p3.jpg");
}

#video_3_1_3>*{
    background-image: linear-gradient(rgba(212, 216, 26, 0),#3A4C3E);
}

#video_3_1_4{
    background-image: url("/video recommendation/p4.jpg");
}

#video_3_1_4>*{
    background-image: linear-gradient(rgba(250, 214, 94, 0),#FAD65E);
}

#video_3_1_5{
    background-image: url("/video recommendation/p5.png");
}

#video_3_1_5>*{
    background-image: linear-gradient(rgba(171, 111, 73, 0),#B28D5A);
}

#video_3_1_6{
    background-image: url("/video recommendation/p6.jpg");
}

#video_3_1_6>*{
    background-image: linear-gradient(rgba(0, 95, 174, 0),#005FAE);
}

#video_3_1_7{
    background-image: url("/video recommendation/p7.jpg");
}

#video_3_1_7>*{
    background-image: linear-gradient(rgba(0, 0, 0, 0),#000000);
}

#video_3_1_8{
    background-image: url("/video recommendation/p8.png");
}

#video_3_1_8>*{
    background-image: linear-gradient(rgba(83, 146, 213, 0),#393F3D);
}

#video_3_1_9{
    background-image: url("/video recommendation/p9.jpg");
}

#video_3_1_9>*{
    background-image: linear-gradient(rgba(218, 59, 9, 0),#DA3B09);
}

#video_3_1_10{
    background-image: url("/video recommendation/p10.jpg");
}

#video_3_1_10>*{
    background-image: linear-gradient(rgba(15, 23, 215, 0),#371E1C);
}

.video_3_1>*{
    width: 100%;
    height: 40%;
    position: relative;
}

.video_3_1>*>*{
    position: absolute;
    bottom: 20%;
    left: 10%;
    /*font-family: Inter;*/
    font-size: 28px;
    font-weight: 700;
    line-height: 39px;
    text-align: left;
    color: #fff;
}
</style>
