<template>
<div>
  <div class="row">
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title text-center">Advanced Fitness Threads</h3>
        </div>
        <!-- https://www.reddit.com/r/AdvancedFitness/top.json?limit=5&sort=top&t=month -->
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="badge">14</span> Studies show antioxidants reduce muscular and cardiovascular adaptations to exercise - some questions
            </li>
            <li class="list-group-item">
              <span class="badge">6</span> Exercise-induced stress behavior, gut-microbiota-brain axis and diet: a systematic review for athletes | Journal of the International Society of Sports Nutrition
            </li>
            <li class="list-group-item">
              <span class="badge">4</span> Brain Functional Connectivity Is Different during Voluntary Concentric and Eccentric Muscle Contraction
            </li>
            <li class="list-group-item">
              <span class="badge">7</span> Using science to solve overtraining: a practical guide based on 190+ studies (2016)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title text-center">Latest PRs</h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Estimated 1RM
                            </label>
              <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Actual 1RM
                            </label>
            </div>
          </form>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Exercise</th>
                <th>Weight</th>
                <th>Gain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11/29/2016</td>
                <td>Deadlift</td>
                <td>406kg</td>
                <td>+22kg</td>
              </tr>
              <tr>
                <td>11/29/2016</td>
                <td>Deadlift</td>
                <td>406kg</td>
                <td>+22kg</td>
              </tr>
              <tr>
                <td>11/29/2016</td>
                <td>Deadlift</td>
                <td>406kg</td>
                <td>+22kg</td>
              </tr>
              <tr>
                <td>11/29/2016</td>
                <td>Deadlift</td>
                <td>406kg</td>
                <td>+22kg</td>
              </tr>
              <tr>
                <td>11/29/2016</td>
                <td>Deadlift</td>
                <td>406kg</td>
                <td>+22kg</td>
              </tr>
              <tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HomePage',
  created () {
    Promise.all([
      this.$store.dispatch('FETCH_EXERCISES'),
      this.$store.dispatch('FETCH_WORKOUTS')
    ]).catch(() => this.setErrorMessage('Something went wrong on our side...'))
  },
  methods: {
    ...mapMutations({
      setErrorMessage: 'SET_ERROR_MESSAGE'
    })
  }
}
</script>
