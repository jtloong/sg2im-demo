#npm start
cd sg2im-service
export FLASK_APP=app.py
source env/bin/activate
pip install -r requirements.txt
echo $PWD > env/lib/python3.5/site-packages/sg2im.pth
python app.py
