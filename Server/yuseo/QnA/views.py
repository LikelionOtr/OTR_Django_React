from django.shortcuts import render, get_object_or_404, redirect
from .models import Question
from .forms import AnswerForm

# Create your views here.
def seven(request):
    return render(request, 'QnA/seven.html')

def question(request):
    questions= Question.objects
    return render(request, 'QnA/question.html', {'questions':questions})

def detail(request, question_id):
    question=get_object_or_404(Question, pk= question_id)
    form = AnswerForm()
    return render(request, 'QnA/detail.html', {'form': form, 'question': question})


def answercreate(request, question_id):
    question = get_object_or_404(Question, pk=question_id) # 이해 덜 됐음
    if request.method =='POST':
        form= AnswerForm(request.POST)
        if form.is_valid():
            answer= form.save(commit=False)
            answer.question= question
            answer.save()

    return redirect('question')