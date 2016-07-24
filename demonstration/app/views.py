# views.py

from django.shortcuts import render, HttpResponse
import requests
import json
# Create your views here.





def imageprocess(request):
	return render(request,'app/imageprocess.html')




def dealimg(request):
    if request.is_ajax() and request.POST:
    	parameters=request.POST.get('parameters')
    	imgindex=request.POST.get('img')
        data = {}
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        raise Http404

