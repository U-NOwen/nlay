<template>
  <div class="question-container">
    <h1 class="title">答题模块</h1>
    <el-row :gutter="20">
      <!-- 问题展示区 -->
      <el-col :span="16">
        <el-card v-for="(problem, index) in problems" :key="problem.problemId" class="problem-card">
          <h3>{{ index + 1 }}. {{ problem.description }}</h3>
          <img v-if="problem.image" :src="problem.image" alt="Problem Image" class="problem-image" />
          <div v-if="problem.choiceList.length">
            <el-radio-group
                v-model="userAnswers[problem.problemId]"
                :disabled="isSubmitted"
                @change="updateAnswer(problem.problemId)"
            >
              <div
                  v-for="choice in problem.choiceList"
                  :key="choice.id"
                  class="choice-item"
              >
                <el-radio :label="choice.choiceChar">
                  <div >{{ choice.choiceChar }}.&nbsp&nbsp&nbsp&nbsp  {{ choice.description }}&nbsp&nbsp</div>
                  <img v-if="choice.image" :src="choice.image" alt="Option Image" class="choice-image" />
                </el-radio>
              </div>
            </el-radio-group>
          </div>
        </el-card>
      </el-col>

      <!-- 答题卡 -->
      <el-col :span="8">
        <div class="answer-card">
          <h3>答题卡</h3>
          <div class="card-grid">
            <el-button
                v-for="(problem, index) in problems"
                :key="problem.problemId"
                type="info"
                :plain="!userAnswers[problem.problemId]"
                @click="scrollToProblem(problem.problemId)"
            >
              {{ index + 1 }}
            </el-button>
          </div>
          <el-button
              type="success"
              size="large"
              block
              @click="submitAnswers"
              :disabled="isSubmitted"
          >
            提交
          </el-button>
          <div v-if="isSubmitted" class="result-summary">
            <h3>成绩：{{ score }}/{{ totalPoints }}</h3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import axios from "axios";
import request from "@/utils/request.ts";

// 示例数据
const problems = ref([]);
const userAnswers = reactive({});
const isSubmitted = ref(false);
const score = ref(0);

// 总分
const totalPoints = computed(() =>
    problems.value.reduce((sum, p) => sum + p.point, 0)
);

// 模拟获取数据
onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  request.get("localhost:8080/user/problem/problemList",{
    bookId:1,
    amount:1
  })
      .then(response => {
        problems.value = response
      })

  problems.value = [
    // 示例问题数据
    {
      problemId: 11,
      description: 'This is the second problem description.',
      point: 10,
      choiceList: [
        {id: 8, description: '111111111111111111111111111111111', problemId: 11, choiceChar: 'A', image: ''},
        {id: 9, description: '111111111111111111111111111111112', problemId: 11, choiceChar: 'B', image: ''},
        {id: 9, description: '111111111111111111111111111111113', problemId: 11, choiceChar: 'C', image: ''}
      ],
      answer: 'B',
      type: 1,
      image: '',
    },
    {
      problemId: 13,
      description: 'This is a sample problem description.',
      point: 5,
      choiceList: [
        {id: 13, description: 'Option A', problemId: 13, choiceChar: 'A', image: ''},
        {id: 14, description: 'Option B', problemId: 13, choiceChar: 'B', image: ''},
      ],
      answer: 'A',
      type: 1,
      image: '',
    },
  ];
};

// 提交答案
const submitAnswers = () => {
  let correctCount = 0;
  problems.value.forEach((problem) => {
    if (userAnswers[problem.problemId] === problem.answer) {
      correctCount += problem.point;
    }
  });
  score.value = correctCount;
  isSubmitted.value = true;
  ElMessage.success('答案已提交！');
};

// 跳转到指定问题
const scrollToProblem = (problemId) => {
  document.getElementById(`problem-${problemId}`)?.scrollIntoView({
    behavior: 'smooth',
  });
};

// 更新答案
const updateAnswer = (problemId) => {
  console.log(`Updated answer for Problem ${problemId}:`, userAnswers[problemId]);
};
</script>

<style scoped>
.question-container {
  padding: 20px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.problem-card {
  margin-bottom: 20px;
}
.problem-image,
.choice-image {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}
.choice-item {
  margin-bottom: 10px;
}
.answer-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.result-summary {
  margin-top: 20px;
  text-align: center;
}
</style>
