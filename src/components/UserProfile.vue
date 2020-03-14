<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <!-- <div>{{ info.id}}</div> -->
                    <slot name="username"></slot><!--상위 컴포넌트에서 정의할 영역-->                    
                    <slot name="time"></slot><!--상위 컴포넌트에서 정의할 영역-->
                    <slot name="karma"></slot>
                </div>                
            </div>            
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style scope>
    .user-container{display:flex;}
    .fa-user{font-size:40px;}
</style>
