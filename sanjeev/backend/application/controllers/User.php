<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Credentials', 'true');
header("Access-Control-Allow-Headers: Content-Type, Origin, Accept, Authorization, X-Requested-With");

class User extends CI_Controller {

	public function __construct()
    {
		parent::__construct();
		$this->load->model('User_model');

    }
	public function index()
	{
		echo "hii";
	}

    public function insertdata()
    {    
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $name = $data['name'];
            $fathername = $data['fathername'];
            $dob = $data['dob'];
            $address = $data['address'];
            $email = $data['email'];
            $password = $data['password'];
             
            $userdata=array(
                'name'=>$name,
                'fathername'=>$fathername,
                'dob'=>$dob,
                'address'=>$address,
                'email'=>$email,
                'password'=>$password,
                'is_deleted'=>1,
                 );
       
            $insertUser = $this->User_model->insertUserData($userdata);
            if($insertUser)
                    {        
                        echo json_encode(["success"=>"1","msg"=>"User Inserted."]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"User Not Inserted!"]);
                    }           
        }
          else 
          {
            echo json_encode(["success"=>"0","msg"=>"User Not Inserted!"]);
          }
    } 
    public function checkuser()
    {
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $email = $data['email'];
            $password = $data['password'];
                    
            $Userdata = $this->User_model->checkuser($email,$password);
            if($Userdata)
                    {      
                        echo json_encode($Userdata);
  
                        // echo json_encode(["success"=>"1","msg"=>"User found" ,"userdata"=>$Userdata]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"error ! Please, enter valid details !"]);
                    }           
        }
          else 
          {
            echo json_encode(["success"=>"0","msg"=>"User Not found!"]);
          }
    }

    public function addtodos()
    {    
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $todotitle = $data['todotitle'];
            $description = $data['description'];
             
            $tododata=array(
                'todotitle'=>$todotitle,
                'description'=>$description,
                'is_deleted'=>1,
                 );
       
            $insertUser = $this->User_model->tododata($tododata);
            if($insertUser)
                    {        
                        echo json_encode(["success"=>"1","msg"=>"Todo Inserted."]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"Todo Not Inserted!"]);
                    }           
        }else 
          {
            echo json_encode(["success"=>"0","msg"=>"Todo Not Inserted!"]);
          }
    } 
    public function todolist()
    {
        $data=$this->User_model->usertodolist();
        //    print_r($data); exit;
        echo json_encode($data);

    }
    public function deletetodo()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $todoid = $data['todoid'];    
        // echo json_encode($todoid);
        $tododetail=$this->User_model->tododetail($todoid);
        $todoid=$tododetail[0]['todoid'];
        // echo json_encode($todoid);
        if ($todoid)
            {
                $dataArray = array(
				'todoid'=>$todoid,
				'is_deleted' =>0,
				);
				$lastupdate=$this->User_model->deletetodo($dataArray);
				if ($lastupdate)
                {
                    echo json_encode(["success"=>"1","msg"=>"Todo deleted."]);

				}else
                {
                    echo json_encode(["success"=>"0","msg"=>"something went wrong"]);
				}
			}else
            {
                echo json_encode(["success"=>"0","msg"=>"something went wrong"]);
            }

    }  
}